import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task, timeout } from 'ember-concurrency';
import moment from 'moment';
import jstz from 'jstimezonedetect';

export default class TimetableCalendar extends Component {
  @service
  store;

  @service
  currentRadio;

  @service
  router;

  @tracked shows = [];
  @tracked showsQuery;

  @action
  calendarRemoveOccurrence() {}

  @action
  calendarEditOccurrence() {}

  @action
  calendarUpdateOccurrence() {}

  @action
  newShow(event) {
    console.log(event.date);
    console.log('newShow action in timetable-calendar component');
    this.router.transitionTo('authenticated.schedule.new', {
      queryParams: { date: event.date },
    });
  }

  @action
  calendarClickOccurrence(occurrence) {
    console.log(`clicked occurrence: ${occurrence}`);
  }

  @action
  calendarNavigate(event) {
    console.log(`on navigate: ${event.start}, ${event.end}`); // eslint-disable-line no-console
    let start = event.start.format('YYYY-MM-DD');
    this.args.reloadCalendar({ start: start, view: event.view });
  }

  @action
  performTask() {
    console.log('in calendar performTask');
    let query = this.args.query;
    this.fetchData.perform(query);
  }

  @(task(function* (query) {
    yield timeout(1000);
    query.timezone = jstz.determine().name();
    const start = query.start;
    if (query.view === 'month') {
      query.start = moment(start)
        .startOf('month')
        .subtract(1, 'month')
        .format('YYYY-MM-DD');
      query.end = moment(start)
        .endOf('month')
        .add(1, 'month')
        .format('YYYY-MM-DD');
    } else {
      query.start = moment(start)
        .startOf('week')
        .subtract(1, 'week')
        .format('YYYY-MM-DD');
      query.end = moment(start)
        .endOf('week')
        .add(1, 'week')
        .format('YYYY-MM-DD');
    }
    let shows = this.store.query('scheduled-show', query).then((shows) => {
      return shows;
    });
    let resolvedShows = yield shows;
    this.showsQuery = resolvedShows;
    return (this.shows = resolvedShows.toArray());
  }).restartable())
  fetchData;
}
