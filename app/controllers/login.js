import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';

export default class LoginController extends Controller {
  @service
  session;

  @service
  flashMessages;

  @tracked rememberMe = true;

  @action
  signIn() {
    let login = this.login;
    let password = this.password;
    this.session.authenticate('authenticator:devise', login, password).then(() => {
      this.rememberMe && this.set('session.store.cookieExpirationTime', 60 * 60 * 24 * 14);
      this.flashMessages.success('Logged in!');
      this.transitionToRoute('authenticated.dashboard');
    }).catch((reason) => {
      this.flashMessages.danger("Incorrect username or password");
      console.log(reason);
    });
  }
}
