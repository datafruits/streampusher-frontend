import { action } from '@ember/object';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class PlaylistsShowController extends Controller {
  @service router;

  @action
  savePlaylist(playlist) {
    console.log('in savePlaylist');
    let onSuccess = () => {
      //this.isEditing = false;
      //transition to playlist show
      this.router.transitionTo('playlist.show', playlist);
    };
    let onFail = () => {
      console.log("playlist save failed");
      this.flashMessages.danger("Something went wrong!");
      return;
    };
    playlist.save().then(onSuccess, onFail);
  }
}
