import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DjsShowController extends Controller {
  @action
  save(dj) {
    dj.save().then(() => {
      this.flashMessages.success('Updated user!');
      this.transitionToRoute('authenticated.djs');
    }).catch((error) => {
      this.flashMessages.danger("Couldn't update user!");
      console.log(error);
    });
  }
}
