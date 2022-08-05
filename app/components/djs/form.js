import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import DjValidations from '../../validations/dj';
import { action } from '@ember/object';

export default class Form extends Component {
  DjValidations = DjValidations;

  @service
  flashMessages;

  @service
  router;

  @action
  submit(result, event) {
    event.preventDefault();
    //if(result.id) {
      this.flashMessages.success('Saved user!');
      this.router.transitionTo('authenticated.djs');
    // } else {
    //   this.flashMessages.danger("Couldn't save user!");
    //   console.log(result.errors);
    // }
  }
}
