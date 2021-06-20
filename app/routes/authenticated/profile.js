import Route from "@ember/routing/route";
import { action } from "@ember/object";

export default class DjsRoute extends Route {
  @action
  save(dj) {
    dj.save()
      .then(() => {
        console.log("in save");
        this.flashMessages.success("Saved user!");
        //this.clearForm();
        this.refresh();
      })
      .catch((error) => {
        this.flashMessages.danger("Couldn't save user!");
        console.log(error);
      });
  }
}
