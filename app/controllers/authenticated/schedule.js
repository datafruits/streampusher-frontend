import { action } from '@ember/object';
import Controller from '@ember/controller';
//import moment from 'moment';
import { inject as service } from '@ember/service';

// export const TimetableQueryParams = new QueryParams({
//   start: {
//     defaultValue: moment().format('YYYY-MM-DD'),
//     refresh: true,
//   },
//   view: {
//     defaultValue: 'week',
//     refresh: true,
//   },
// });
//
export default class ScheduleController extends Controller {
  @service router;
  queryParams = ['start', 'view'];

  get query() {
    return {
      start: this.router.currentRoute.queryParams.start,
      view: this.router.currentRoute.queryParams.view,
    };
  }

  @action
  reloadCalendar(params) {
    console.log('reload calendar');
    console.log(params);
    // this.set('start', params.start);
    // this.set('view', params.view);
    this.router.transitionTo({
      queryParams: { start: params.start, view: params.view },
    });
  }

  @action
  calendarTypeChange(type) {
    //this.set('view', type);
    this.router.transitionTo({
      queryParams: { view: type },
    });
  }
}
