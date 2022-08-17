import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { debounce } from '@ember/runloop';
import RSVP from 'rsvp';
import { tracked } from '@glimmer/tracking';

export default class PlaylistsSelectComponent extends Component {
  @service store;

  @tracked defaultPlaylist;
  @tracked playlists;

  @action
  handleChange(selection, event) {
    this.args.changeset.set(this.args.fieldName, selection);
    this.args.changeset.validate(this.args.fieldName);
  }

  @action
  fetchPlaylists() {
    return this.store.loadRecords('playlist').then((playlists) => {
      this.setDefaultPlaylist();
      this.playlists = playlists;
    });
  }

  setDefaultPlaylist() {
    let playlist = this.store.peekRecord('playlist', 3);
    this.defaultPlaylist = playlist;
    this.args.changeset.set(this.args.fieldName, this.defaultPlaylist);
  }

  get selectedPlaylist() {
    return this.args.selected ? this.args.selected : this.defaultPlaylist;
  }

  @action searchPlaylists(term) {
    return new RSVP.Promise((resolve, reject) => {
      debounce(this, this._performSearch, term, resolve, reject, 600);
    });
  }

  _performSearch(term, resolve, reject) {
    const query = {
      search: {
        keyword: term
      }
    };
    this.store.query('playlist', query).then((playlists) => {
      return resolve(playlists);
    }, reject);
  }
}
