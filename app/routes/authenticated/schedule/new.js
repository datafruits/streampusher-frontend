import Route from "@ember/routing/route";
import { hash } from "rsvp";

export default Route.extend({
  model() {
    return hash({
      scheduledShow: this.store.createRecord("scheduled-show"),
      labels: this.store.loadRecords("label"),
      djs: this.store.loadRecords("user"),
    });
  },
});
