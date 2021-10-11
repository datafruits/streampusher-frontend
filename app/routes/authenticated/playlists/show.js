import classic from "ember-classic-decorator";
import { action } from "@ember/object";
import Route from "@ember/routing/route";
import { hash } from "rsvp";

@classic
export default class ShowRoute extends Route {
  @action
  transitionAfterDelete() {
    this.store.findAll("playlist").then((playlists) => {
      let id = playlists.objectAt(playlists.get("length") - 1).get("id");
      this.transitionTo("playlists.show", id);
    });
  }

  model(params) {
    return hash({
      playlist: this.store.findRecord("playlist", params.id),
      labels: this.store.loadRecords("label"),
    });
  }
}
