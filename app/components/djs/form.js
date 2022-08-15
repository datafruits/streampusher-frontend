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
    this.flashMessages.success('Saved user!');
    this.router.transitionTo('authenticated.djs');
  }

  @action
  onError() {
    this.flashMessages.danger("Couldn't save user :( check the form for errors");
  }
}
