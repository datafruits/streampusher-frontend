import { action } from '@ember/object';
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import QueryParams from 'ember-parachute';

export const PlaylistQueryParams = new QueryParams({
  tracksPage: {
    defaultValue: 1,
    refresh: true
  },
  playlistsPage: {
    defaultValue: 1,
    refresh: true
  },
  query: {
    defaultValue: "",
    refresh: true
  }
});


export default class ShowController extends Controller.extend(PlaylistQueryParams.Mixin) {
  @tracked query;
  @tracked tracksPage;
  @tracked playlistsPage;
  get tracksSearchParams() {
    return { query: this.query, page: this.tracksPage };
  }

  get playlistsSearchParams() {
    return { query: this.query, playlistsPage: this.playlistsPage };
  }

  @tracked isSyncingPlaylist = false;
  @action
  setIsSyncingPlaylist(val) {
    this.isSyncingPlaylist = val;
  }

  @action
  updateSearch(query) {
    console.log(`in updateSearch in controller: ${query}`);
    this.query = query;
    this.tracksPage = 1;
    this.playlistsPage = 1;
  }
}
