import Route from "@ember/routing/route";

export default Route.extend({
  async model() {
    this.store.findAll("host-application");
  },
});
