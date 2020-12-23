import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class PlaylistTracksList extends Component {
  @service
  store;

  @service
  flashMessages;

  @tracked
  isEditingSettings = false;
  @tracked
  isEditing = false;

  @tracked
  isSelectingPlaylist = false;

  isSyncingPlaylist = false;

  @tracked playlistsQuery;

  @action
  reorderItems(itemModels, draggedModel) {
    this.setIsSyncingPlaylist(true);

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
        this.setIsSyncingPlaylist(false);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
        this.flashMessages.danger("Sorry, something went wrong!");
        this.setIsSyncingPlaylist(false);
      });
  }

  @action
  selectPlaylist() {
    console.log("setting isSelectingPlaylist");
    this.isSelectingPlaylist = !this.isSelectingPlaylist;
    console.log(this.isSelectingPlaylist);
  }

  @action
  editPlaylist() {
    this.isEditing = !this.isEditing;
  }

  @action
  cancelEditing() {
    this.isEditing = !this.isEditing;
    if (this.playlist.get("isNew")) {
      this.set("playlist", this.oldPlaylist);
    }
  }

  @action
  editPlaylistSettings() {
    this.isEditingSettings = !this.isEditingSettings;
  }

  @action
  newPlaylist() {
    var store = this.store;
    var playlist = store.createRecord("playlist");
    this.set("oldPlaylist", this.playlist);
    this.set("playlist", playlist);
    this.set("isEditing", true);
  }

  @action
  save() {
    let playlist = this.playlist;
    let onSuccess = () => {
      this.set("isEditing", false);
    };
    let onFail = () => {
      console.log("playlist save failed");
      this.flashMessages.danger("Something went wrong!");
    };
    playlist.save().then(onSuccess, onFail);
  }
}
