import Route from '@ember/routing/route';
import { hash } from "rsvp";

export default class ShowRoute extends Route {
  model(params) {
    return hash({
      scheduledShow: this.store.loadRecord('scheduled-show', params.id),
      labels: this.store.loadRecords("label"),
      djs: this.store.loadRecords("user"),
    });
  }
}
