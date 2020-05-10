import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TracksSearchComponent extends Component {
  @action
  updateSearch(event){
    const query = event.target.value;
    this.args.search(query);
  }

  @action
  clearSearch(){
    this.set('filterText', '');
  }
}
