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

  @action
  reorderItems(itemModels, draggedModel) {
    this.model.playlist.playlistTracks.map(function (playlistTrack) {
      let newPosition = itemModels.findIndex(function (item) {
        return item.id == playlistTrack.id;
      });
      playlistTrack.position = newPosition;
    });
    draggedModel
      .save()
      .then(() => {
        this.model.playlist.playlistTracks = itemModels;
        console.log("reorderItems success");
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
        this.flashMessages.danger("Sorry, something went wrong!");
      });
  }
}
