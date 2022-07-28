import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';
import dayjs from 'dayjs';

export default class ScheduleNewRoute extends Route {
  @service currentUser;
  model() {
    let date = new Date();
    date.setMinutes(0, 0, 0);
    let newShow = this.store.createRecord('scheduled-show', {
      start: dayjs(date).add(1, 'hours').toDate(),
      end: dayjs(date).add(2, 'hours').toDate(),
    });
    newShow.djs.pushObject(this.currentUser.user);
    return hash({
      scheduledShow: newShow,
      labels: this.store.loadRecords('label'),
      djs: this.store.loadRecords('user'),
    });
  }
}