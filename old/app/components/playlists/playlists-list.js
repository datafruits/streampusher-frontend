import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class PlaylistsPlaylistsListComponent extends Component {
  @service
  router;

  @tracked
  isSelectingPlaylist = false;

  @action
  selectPlaylist() {
    this.isSelectingPlaylist = !this.isSelectingPlaylist;
  }

  @action
  newPlaylist() {
    this.router.transitionTo('authenticated.playlists.new');
  }
}
