import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNameBindings: ['showing:block:hidden'],
  session: service(),
  actions: {
    logout(){
      this.session.invalidate();
    }
  }
});
