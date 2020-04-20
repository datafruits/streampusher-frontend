import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DjsTableComponent extends Component {
  @tracked djs;

  get savedDjs(){
    if(this.args.djs){
      return this.args.djs.filter((dj) => {
        return !dj.isNew;
      });
    }
  }

  @service currentUser;
}
