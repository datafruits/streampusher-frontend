import classic from 'ember-classic-decorator';
import { classNameBindings } from '@ember-decorators/component';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

@classic
@classNameBindings('showingClass')
export default class UserMenu extends Component {
  @service session;

  @service currentUser;

  @computed('showing')
  get showingClass() {
    if (this.showing) {
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
