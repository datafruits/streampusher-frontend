import classic from 'ember-classic-decorator';
import { action } from '@ember/object';
import Controller from '@ember/controller';

@classic
export default class ShowController extends Controller {
  @action
  setIsSyncingPlaylist(val) {
    this.set('isSyncingPlaylist', val);
  }
}
