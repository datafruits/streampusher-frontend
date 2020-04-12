import classic from 'ember-classic-decorator';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

@classic
export default class TopNavbar extends Component {
  @service
  session;

  @service
  currentUser;
}
