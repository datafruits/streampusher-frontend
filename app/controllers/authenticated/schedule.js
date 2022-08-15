import { action } from '@ember/object';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

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
    this.router.transitionTo({
      queryParams: { start: params.start, view: params.view },
    });
  }

  @action
  calendarTypeChange(type) {
    this.router.transitionTo({
      queryParams: { view: type },
    });
  }
}
