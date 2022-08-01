import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'streampusher-frontend/config/environment';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import classic from 'ember-classic-decorator';
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';

@classic
export default class Application extends JSONAPIAdapter {
  @service session;

  host = ENV.API_HOST;

  @computed('session.{data.authenticated.token,isAuthenticated}')
  get headers() {
    const headers = {};
    if (this.session.isAuthenticated) {
      headers[
        'Authorization'
      ] = `Bearer ${this.session.data.authenticated.token}`;
    }

    return headers;
  }
  // authorize(xhr) {
  //   let { email, token } = this.get('session.data.authenticated');
  //   let authData = `Token token="${token}", email="${email}"`;
  //   console.log(authData);
  //   xhr.setRequestHeader('Authorization', authData);
  // },
  buildURL() {
    var base;
    base = super.buildURL.apply(this, arguments);
    return '' + base + '.json';
  }

  pathForType(type) {
    var underscored = underscore(type);
    return pluralize(underscored);
  }
}
