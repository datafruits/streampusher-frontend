import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class UserMenu extends Component {
  @service session;

  @service currentUser;

  get showingClass() {
    if (this.args.showing) {
      return 'block';
    } else {
      return 'hidden';
    }
  }

  @action
  logout() {
    this.session.invalidate();
  }
}
