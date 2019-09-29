import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  isShowingMobileMenu: false,
  actions: {
    toggleMobileMenu(){
      this.toggleProperty('isShowingMobileMenu');
    },
    toggleUserMenu(){
      this.toggleProperty('isShowingUserMenu');
    },
    logout(){
      this.session.invalidate();
    }
  }
});
