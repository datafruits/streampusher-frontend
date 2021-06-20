import { inject as service } from "@ember/service";
import Route from "@ember/routing/route";
import ApplicationRouteMixin from "ember-simple-auth/mixins/application-route-mixin";

export default class ApplicationRoute extends Route.extend(
  ApplicationRouteMixin
) {
  @service
  currentUser;

  @service
  session;

  @service
  currentRadio;

  beforeModel() {
    this._loadCurrentRadio();
    return this._loadCurrentUser();
  }

  async sessionAuthenticated() {
    let _super = this._super;
    await this._loadCurrentUser();
    await this._loadCurrentRadio();
    _super.call(this, ...arguments);
  }

  _loadCurrentUser() {
    return this.currentUser.load().catch(() => this.session.invalidate());
  }

  _loadCurrentRadio() {
    return this.currentRadio.load().catch(() => {
      console.log("couldn't load currentRadio");
    });
  }
}
