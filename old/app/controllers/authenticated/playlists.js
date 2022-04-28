import { action } from '@ember/object';
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import QueryParams from 'ember-parachute';
import { inject as service } from '@ember/service';

export const PlaylistQueryParams = new QueryParams({
  tracksPage: {
    defaultValue: 1,
    refresh: true,
  },
  tracksQuery: {
    defaultValue: '',
    refresh: true,
  },
});

export default class PlaylistsController extends Controller.extend(
  PlaylistQueryParams.Mixin
) {
  @service router;
  @tracked tracksQuery;
  @tracked playlistsQuery;
  @tracked tracksPage = 1;
  @tracked playlistsPage;

  get tracksSearchParams() {
    return { tracksQuery: this.tracksQuery, page: this.tracksPage };
  }
  get playlistsSearchParams() {
    return {
      playlistsQuery: this.playlistsQuery,
      playlistsPage: this.playlistsPage,
    };
  }

  @tracked isSyncingPlaylist = false;

  @action
  updateSearch(query) {
    console.log(`in updateSearch in controller: ${query}`);
    this.tracksQuery = query;
    this.tracksPage = 1;
  }

  @action
  savePlaylist(playlist) {
    console.log('in savePlaylist');
    let onSuccess = () => {
      this.flashMessages.success('Playlist created!');
      this.router.transitionTo('playlist.show', playlist);
    };
    let onFail = () => {
      console.log('playlist save failed');
      this.flashMessages.danger('Something went wrong!');
      return;
    };
    playlist.save().then(onSuccess, onFail);
  }
}
