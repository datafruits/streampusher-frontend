import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';
import { inject as service } from '@ember/service';
import { action } from '@ember/object'

export default class TracksLoaderComponent extends Component {
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
    let tracks = this.store.query('track', {
        page: query.page,
        search: {
          keyword: query.query
        }
      });
    let resolvedTracks = yield tracks;
    return this.set('data', resolvedTracks);
  }).restartable())
  fetchData;
}
