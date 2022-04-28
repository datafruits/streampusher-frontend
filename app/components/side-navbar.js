import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class SideNavbar extends Component {
  @service
  currentRadio;

  @service
  currentUser;
}
