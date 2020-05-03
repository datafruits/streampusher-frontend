import classic from 'ember-classic-decorator';
import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';
import { inject as service } from '@ember/service';

@classic
export default class TracksLoader extends Component {
  @service
  store;

  init() {
    super.init(...arguments);
    this.data = [];
  }

  didReceiveAttrs() {
    let query = this.query;
    this.fetchData.perform(query);
  }

  @(task(function*(query) {
    yield timeout(1000);
    let tracks = this.store.queryRecord('track', query);
    let resolvedTracks = yield tracks;
    return this.set('data', resolvedTracks);
  }).restartable())
  fetchData;
}
