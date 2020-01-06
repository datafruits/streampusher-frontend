import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  flashMessages: service(),
  actions: {
    signIn(){
      let login = this.login;
      let password = this.password;
      this.session.authenticate('authenticator:devise', login, password).then(() => {
        this.flashMessages.success('Logged in!');
      }).catch((reason) => {
        this.flashMessages.danger("Incorrect username or password");
        console.log(reason);
      });
    }
  }
});
