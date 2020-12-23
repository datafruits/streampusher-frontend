import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class PlaylistsPlaylistSelectorComponent extends Component {
  @service store;
  @action
  fetchPlaylists() {
    return this.store.loadRecords("playlist");
  }
}
