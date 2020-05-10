import { action } from '@ember/object';
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import QueryParams from 'ember-parachute';

export const PlaylistQueryParams = new QueryParams({
  page: {
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
  @tracked page;
  get searchParams() {
    return { query: this.query, page: this.page };
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
    this.page = 1;
  }
}
