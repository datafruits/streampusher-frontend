import classic from 'ember-classic-decorator';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import ENV from "streampusher-frontend/config/environment";

@classic
export default class SetupRoute extends Route {
  @service
  flashMessages;

  @service
  session;

  beforeModel() {
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
}
