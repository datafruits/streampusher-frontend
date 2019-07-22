import ActiveModelAdapter from 'active-model-adapter';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';
import ENV from "streampusher-frontend/config/environment";

export default ActiveModelAdapter.extend(AdapterFetch, {
  host: ENV.API_HOST,
  buildURL: function() {
    var base;
    base = this._super.apply(this, arguments);
    return "" + base + ".json";
  }
});
