import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  flashMessages: service(),
  init() {
    this._super(...arguments);
    this.dj = this.store.createRecord('user');
  },
  clearForm() {
    this.dj = this.store.createRecord('user');
  },
  actions: {
    save() {
      this.dj.save().then(() => {
        this.flashMessages.success('Saved user!');
        this.clearForm();
      }).catch((error) => {
        this.flashMessages.danger("Couldn't save user!");
        console.log(error);
      });
    }
  }
});
