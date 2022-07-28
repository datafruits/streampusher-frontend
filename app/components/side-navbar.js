import { classNameBindings } from '@ember-decorators/component';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import classic from 'ember-classic-decorator';

@classic
@classNameBindings('isShowingMobileMenu:block:hidden')
export default class SideNavbar extends Component {
  @service
  currentRadio;

  @service
  currentUser;
}
