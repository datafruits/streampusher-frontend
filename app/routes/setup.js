import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from "streampusher-frontend/config/environment";

export default Route.extend({
  flashMessages: service(),
  session: service(),
  beforeModel(){
    if(this.session.isAuthenticated){
      this.transitionTo('authenticated.dashboard');
    }
    fetch(`${ENV.API_HOST}/setup/allowed.json`).then((response) => {
      if(response.ok){
        console.log('setup is allowed');
      }else{
        console.log('not allowed');
        this.transitionTo('login');
      }
    }).catch((error) => {
      console.log(`some error requesting setup allowed: ${error}`);
      this.transitionTo('login');
    });
  }
});
