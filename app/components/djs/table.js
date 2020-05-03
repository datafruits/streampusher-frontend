import Component from '@glimmer/component';
import { action } from '@ember/object';
//import { debounce } from '@ember/runloop';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DjsTableComponent extends Component {
  @service currentUser;

  //@tracked djs;

  // get savedDjs(){
  //   if(this.args.djs){
  //     return this.args.djs.filter((dj) => {
  //       return !dj.isNew;
  //     });
  //   }
  // }

  // @tracked
  // filterText = '';

  // @observes('filterText')
  // observeQuery() {
  //   debounce(this, this.search, 500);
  // }

}
