import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class DjsTableComponent extends Component {
  @service currentUser;

  @service store;

  @action
  fetchDjs() {
    const query = {
      page: this.args.searchParams.page,
      search: { keyword: this.args.searchParams.query },
    };
    let djsPromise = this.store.query('user', query);
    return djsPromise;
  }
}
