import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default class TopNavbar extends Component {
  @service
  session;

  @service
  currentUser;
}
