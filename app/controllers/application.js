import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  @service
  session;

  @service flashMessages;

  isShowingMobileMenu = false;

  @action
  toggleMobileMenu() {
    this.isShowingMobileMenu = !this.isShowingMobileMenu;
  }

  @action
  toggleUserMenu() {
    this.isShowingUserMenu = !this.isShowingUserMenu;
  }

  @action
  logout() {
    this.session.invalidate();
  }
}
