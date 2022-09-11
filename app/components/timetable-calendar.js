import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import moment from 'moment';

export default class TimetableCalendar extends Component {
  @service
  store;

  @service
  currentRadio;

  @service
  router;

  @tracked shows = [];
  @tracked showsQuery; /// ????

  @action
  calendarRemoveOccurrence() {}

  @action
  calendarEditOccurrence() {}

  @action
  calendarUpdateOccurrence() {}

  @action
  newShow(event) {
    console.log(event);
    console.log(event.date);
    console.log(this.router.currentRoute.name);
    console.log('newShow action in timetable-calendar component');
    if(this.router.currentRoute.name === 'authenticated.schedule.index') { // HAX :(
      this.router.transitionTo('authenticated.schedule.new', {
        queryParams: { date: event.date },
      });
    }
  }

  @action
  calendarClickOccurrence(occurrence) {
    console.log(`clicked occurrence: ${occurrence}`);
  }

  @action
  calendarNavigate(event) {
    console.log(`on navigate: ${event.start}, ${event.end}`); // eslint-disable-line no-console
    let start = moment(event.start).format('YYYY-MM-DD');
    this.args.reloadCalendar({ start: start, view: event.view });
  }
}
