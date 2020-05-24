import Component from '@glimmer/component';
import { action } from '@ember/object';
import { debounce } from '@ember/runloop';

export default class TracksSearchComponent extends Component {
  @action
  updateSearch(event){
    const query = event.target.value;
    debounce(this, this.args.search, query, 500);
  }

  @action
  clearSearch(){
    this.set('filterText', '');
  }
}
