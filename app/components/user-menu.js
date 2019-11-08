import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  classNameBindings: ['showingClass'],
  session: service(),
  showingClass: computed('showing', 'isShowingMobileMenu', function(){
    if(this.showing){
      return "sm:block";
    }else{
      return "sm:hidden";
    }
  }),
  actions: {
    logout(){
      this.session.invalidate();
    }
  }
});
