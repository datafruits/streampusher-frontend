import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class PlaylistsSettingsComponent extends Component {
  @service store;
  @action
  fetchPlaylists() {
    return this.store.loadRecords("playlist");
  }
  @action
  selectInterpolatedPlaylistId(playlistId) {
    var playlist = this.playlist;
    playlist.set("interpolatedPlaylistId", playlistId);
  }

  @action
  saveSettings() {
    var playlist = this.args.playlist;
    var onSuccess = () => {
      this.args.closeSettings();
    };
    var onFail = () => {
      console.log("playlist settings save failed");
      this.flashMessages.danger("Something went wrong!");
    };
    playlist.save().then(onSuccess, onFail);
  }

  @action
  deletePlaylist() {
    if (confirm("Are you sure you want to delete this playlist?")) {
      var playlist = this.args.playlist;
      playlist.destroyRecord().then(() => {
        this.args.closeSettings();
        //TODO use router service??
        this.args.transitionAfterDelete();
      });
    }
  }
}
