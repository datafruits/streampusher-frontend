import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default class Form extends Component {
  @service
  store;

  @service
  flashMessages;
}
