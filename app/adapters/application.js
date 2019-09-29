import ActiveModelAdapter from 'active-model-adapter';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from "streampusher-frontend/config/environment";
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default ActiveModelAdapter.extend(AdapterFetch, DataAdapterMixin, {
  session: service(),
  host: ENV.API_HOST,
  headers: computed('session.data.authenticated.token', function() {
    const headers = {};
    if (this.session.isAuthenticated) {
      headers['Authorization'] = `Bearer ${this.session.data.authenticated.token}`;
    }

    return headers;
  }),
  // authorize(xhr) {
  //   let { email, token } = this.get('session.data.authenticated');
  //   let authData = `Token token="${token}", email="${email}"`;
  //   console.log(authData);
  //   xhr.setRequestHeader('Authorization', authData);
  // },
  buildURL: function() {
    var base;
    base = this._super.apply(this, arguments);
    return "" + base + ".json";
  }
});
