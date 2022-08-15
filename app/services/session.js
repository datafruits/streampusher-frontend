//https://discord.com/channels/480462759797063690/496695347582861334/738599436917407934
import SimpleAuthSessionService from 'ember-simple-auth/services/session';
import { inject as service } from '@ember/service';

export default class SessionService extends SimpleAuthSessionService {
  @service router;

  @service currentUser;
  @service currentRadio;

  /**
   * Overwrite the handle authentication method
   *
   * @var {Service}
   */
  handleAuthentication() {
    this.router.transitionTo('authenticated.dashboard');
    this._loadCurrentUser();
    this._loadCurrentRadio();
  }

  /**
   * Loads the current authenticated user
   *
   * @void
   */
  async _loadCurrentUser() {
    try {
      const user = await this.currentUser.load();
      console.log('loaded currentUser');
      return user;
    } catch (err) {
      console.log(err);
      await this.session.invalidate();
    }
  }

  // _loadCurrentUser() {
  //   return this.currentUser.load().catch(() => this.session.invalidate());
  // }

  async _loadCurrentRadio() {
    try {
      const radio = await this.currentRadio.load();
      console.log('loaded currentRadio');
    } catch (err) {
      console.log("couldn't load currentRadio");
      console.log(err);
    }
  }
}
