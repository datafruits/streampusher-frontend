import Component from '@ember/component';

export default Component.extend({
  store: service(),
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
        this.clearForm();
      }).catch((error) => {
        console.log(error);
      });
    }
  }
});
