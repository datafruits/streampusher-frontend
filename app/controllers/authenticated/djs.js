import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DjsController extends Controller {
  @action
  save(dj) {
    dj.save().then(() => {
      this.flashMessages.success('Saved user!');
      //this.clearForm();
    }).catch((error) => {
      this.flashMessages.danger("Couldn't save user!");
      console.log(error);
    });
  }
}
