import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { debounce } from "@ember/runloop";
import RSVP from "rsvp";

export default class PlaylistsSelectComponent extends Component {
  @service store;

  @action
  fetchPlaylists() {
    return this.store.loadRecords("playlist").then(() => {
      this.args.onLoad();
    });
  }

  @action searchPlaylists(term) {
    return new RSVP.Promise((resolve, reject) => {
      debounce(this, this._performSearch, term, resolve, reject, 600);
    });
  }

  _performSearch(term, resolve, reject) {
    this.store.query("playlist", { term: term }).then((playlists) => {
      return resolve(playlists);
    }, reject);
  }

}
