import Route from "@ember/routing/route";
import { hash } from "rsvp";
import { inject as service } from '@ember/service';

export default class ScheduleNewRoute extends Route {
  @service currentUser;
  model() {
    let newShow = this.store.createRecord("scheduled-show");
    newShow.djs.pushObject(this.currentUser.user);
    return hash({
      scheduledShow: newShow,
      labels: this.store.loadRecords("label"),
      djs: this.store.loadRecords("user"),
    });
  }
}
