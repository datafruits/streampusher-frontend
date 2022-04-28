import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PlaylistsPlaylistSelectorComponent extends Component {
  @service store;
  @tracked filterText;

  @action
  fetchPlaylists() {
    return this.store.query('playlist', {
      page: 1,
      search: {
        keyword: this.filterText,
      },
    });
  }
}
