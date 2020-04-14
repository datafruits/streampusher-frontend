import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default class LoginController extends Controller {
  @service
  session;

  @service
  flashMessages;

  @action
  signIn() {
    let login = this.login;
    let password = this.password;
    this.session.authenticate('authenticator:devise', login, password).then(() => {
      this.flashMessages.success('Logged in!');
      this.transitionToRoute('authenticated.dashboard');
    }).catch((reason) => {
      this.flashMessages.danger("Incorrect username or password");
      console.log(reason);
    });
  }
}
