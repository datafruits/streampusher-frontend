import classic from 'ember-classic-decorator';
import { hash } from 'rsvp';
import Route from '@ember/routing/route';
import moment from 'moment';

@classic
export default class ShowRoute extends Route {
  model(params) {
    let start = moment().startOf('month').startOf('week').format('YYYY-MM-DD');
    let end = moment().endOf('month').add(8, 'days').format('YYYY-MM-DD');
    let scheduledShowsQuery = this.store
      .query('scheduledShow', {
        start: start,
        end: end,
        //timezone: this.get('timezoneService').getTimezone()
      })
      .then((scheduledShows) => {
        return scheduledShows;
      });
    return hash({
      track: this.store.loadRecord('track', params.id),
      labels: this.store.loadRecords('label'),
      scheduledShows: scheduledShowsQuery,
    });
  }
}
