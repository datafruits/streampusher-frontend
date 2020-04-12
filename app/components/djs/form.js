import classic from 'ember-classic-decorator';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';

@classic
export default class Form extends Component {
  @service
  store;

  @service
  flashMessages;

  @tracked dj;

  init() {
    super.init(...arguments);
    this.dj = this.store.createRecord('user');
  }

  clearForm() {
    this.dj = this.store.createRecord('user');
  }

  @action
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
