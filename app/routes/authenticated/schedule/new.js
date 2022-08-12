import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';
import dayjs from 'dayjs';

export default class ScheduleNewRoute extends Route {
  @service currentUser;
  model(params) {
    console.log(params);
    let date;
    if (params.date) {
      let [year, month, day] = params.date.split('-');
      date = new Date(year, month - 1, day);
    } else {
      date = new Date();
    }
    date.setMinutes(0, 0, 0);
    let newShow = this.store.createRecord('scheduled-show', {
      start: dayjs(date).add(1, 'hours').toDate(),
      end: dayjs(date).add(2, 'hours').toDate(),
      isGuest: false,
    });
    newShow.djs.pushObject(this.currentUser.user);
    return hash({
      scheduledShow: newShow,
      labels: this.store.loadRecords('label'),
      djs: this.store.loadRecords('user'),
    });
  }
}
