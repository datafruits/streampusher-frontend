import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';
import { inject as service } from '@ember/service';
import { action } from '@ember/object'

export default class DjsLoader extends Component {
  @service
  store;

  data = [];

  @action
  performTask(){
    let query = this.query;
    this.fetchData.perform(query);
  }

  @(task(function*(query) {
    yield timeout(1000);
    let djs = this.store.query('user', {
        page: query.page,
        search: {
          keyword: query.query
        }
      });
    let resolvedDjs = yield djs;
    return this.set('data', resolvedDjs);
  }).restartable())
  fetchData;

}
