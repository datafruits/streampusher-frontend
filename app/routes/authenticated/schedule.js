import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import moment from 'moment';
import jstz from 'jstimezonedetect';

export default class ScheduleRoute extends Route {
  @service router;

  queryParams = {
    start: {
      refreshModel: true
    }
  };

  model(params) {
    let query = {
      start: params.start,
    }
    query.timezone = jstz.determine().name();
    const start = query.start;
    query.start = moment(start)
      .startOf('month')
    //.subtract(1, 'month')
      .format('YYYY-MM-DD');
    query.end = moment(start)
      .endOf('month')
    //.add(1, 'month')
      .format('YYYY-MM-DD');
    console.log(`querying shows in route..`);
    console.log(query);
    return this.store.loadRecords('scheduled-show', query);
  }
}
