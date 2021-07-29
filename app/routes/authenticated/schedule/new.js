import Route from "@ember/routing/route";
import { hash } from "rsvp";
import { inject as service } from '@ember/service';

export default class ScheduleNewRoute extends Route {
  @service currentUser;
  model() {
    return hash({
      scheduledShow: this.store.createRecord("scheduled-show", {
        host: this.currentUser.user
      }),
      labels: this.store.loadRecords("label"),
      djs: this.store.loadRecords("user"),
    });
  }
}
