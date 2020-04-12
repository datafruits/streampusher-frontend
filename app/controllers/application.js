import classic from 'ember-classic-decorator';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

@classic
export default class ApplicationController extends Controller {
  @service
  session;

  isShowingMobileMenu = false;

  @action
  toggleMobileMenu() {
    this.toggleProperty('isShowingMobileMenu');
  }

  @action
  toggleUserMenu() {
    this.toggleProperty('isShowingUserMenu');
  }

  @action
  logout() {
    this.session.invalidate();
  }
}
