import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PlaylistsSearchComponent extends Component {
  @action
  updateSearch(event) {
    const params = { query: event.target.value };
    this.args.search(params);
  }

  @action
  clearSearch() {
    this.set('filterText', '');
  }
}
