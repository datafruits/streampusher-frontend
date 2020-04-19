import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';

export default class Form extends Component {
  @service
  store;

  @service
  flashMessages;
}
