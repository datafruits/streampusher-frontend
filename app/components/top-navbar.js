import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class TopNavbar extends Component {
  @service
  session;

  @service
  currentUser;
}
