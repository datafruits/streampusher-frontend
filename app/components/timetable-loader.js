import classic from 'ember-classic-decorator';
import { tagName } from '@ember-decorators/component';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';
import moment from 'moment';
import jstz from 'jstimezonedetect';

@classic
@tagName('')
export default class TimetableLoader extends Component {
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
    query.timezone = jstz.determine().name();
    const start = query.start;
    if(query.view === 'month'){
      query.start = moment(start).startOf('month').subtract(1, 'month').format('YYYY-MM-DD');
      query.end = moment(start).endOf('month').add(1, 'month').format('YYYY-MM-DD');
    }else{
      query.start = moment(start).startOf('week').subtract(1, 'week').format('YYYY-MM-DD');
      query.end = moment(start).endOf('week').add(1, 'week').format('YYYY-MM-DD');
    }
    let shows = this.store.query('scheduled-show', query).then((shows) => {
      return shows;
    });
    let resolvedShows = yield shows;
    return this.set('data', resolvedShows);
  }).restartable())
  fetchData;
}
