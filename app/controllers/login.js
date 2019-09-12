import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  actions: {
    signIn(login, password){
      this.get('session').authenticate('authenticator:devise', login, password).catch((reason) => {
        console.log(reason);
      });
    }
  }
});
