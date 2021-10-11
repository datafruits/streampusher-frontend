import classic from 'ember-classic-decorator';
import { hash } from "rsvp";
import Route from "@ember/routing/route";

@classic
export default class PlaylistsRoute extends Route {
  model() {
    return hash({
      labels: this.store.loadRecords("label"),
    });
  }
}
