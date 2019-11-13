import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  classNameBindings: ['showingClass'],
  session: service(),
  showingClass: computed('showing', function(){
    if(this.showing){
      return "block";
    }else{
      return "hidden";
    }
  }),
  actions: {
    logout(){
      this.session.invalidate();
    }
  }
});
