import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import RSVP from "rsvp";
import { debounce } from "@ember/runloop";

export default class PlaylistsSettingsComponent extends Component {
  @service store;
  @action
  fetchPlaylists() {
    return this.store.loadRecords("playlist");
  }

  _performSearch(term, resolve, reject) {
    this.store.query("playlist", { term: term }).then((playlists) => {
      return resolve(playlists);
    }, reject);
  }

  @action searchPlaylists(term) {
    return new RSVP.Promise((resolve, reject) => {
      debounce(this, this._performSearch, term, resolve, reject, 600);
    });
  }

  @action
  selectInterpolatedPlaylistId(playlistId) {
    let playlist = this.args.playlist;
    playlist.interpolatedPlaylistId = playlistId;
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
