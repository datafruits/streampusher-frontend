import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';
import { inject as service } from '@ember/service';
import { action } from '@ember/object'
import classic from 'ember-classic-decorator';

export default class DjsLoader extends Component {
  @service
  store;

  data = [];

  @action
  performTask(){
    console.log(`in perform task: ${this.query}`);
    let query = this.query;
    this.fetchData.perform(query);
  }

  @(task(function*(query) {
    console.log('in fetchData');
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
