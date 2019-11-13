import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNameBindings: ['isShowingMobileMenu:block:hidden'],
  currentRadio: service(),
});
