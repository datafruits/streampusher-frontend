import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

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
