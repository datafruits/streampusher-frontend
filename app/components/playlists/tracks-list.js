import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class PlaylistTracksList extends Component {
  @service
  store;

  @service
  flashMessages;

  @service
  router;

  @tracked
  isEditingSettings = false;

  @tracked oldPlaylist;

  @tracked
  isSelectingPlaylist = false;

  isSyncingPlaylist = false;

  @tracked playlistsQuery;

  @action
  reorderItems(itemModels, draggedModel) {

    this.get("playlist.playlistTracks").map(function (playlistTrack) {
      let newPosition = itemModels.findIndex(function (item) {
        return item.id == playlistTrack.id;
      });
      playlistTrack.set("position", newPosition);
    });
    draggedModel
      .save()
      .then(() => {
        this.set("playlist.playlistTracks", itemModels);
        console.log("reorderItems success");
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
        this.flashMessages.danger("Sorry, something went wrong!");
      });
  }

  @action
  selectPlaylist() {
    this.isSelectingPlaylist = !this.isSelectingPlaylist;
  }

  @action
  editPlaylistSettings() {
    this.isEditingSettings = !this.isEditingSettings;
  }

  @action
  newPlaylist() {
    this.router.transitionTo('authenticated.playlists.new');
  }
}
