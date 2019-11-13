import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { resolve } from 'rsvp';

export default Service.extend({
  session: service(),
  store: service(),

  load() {
    if (this.get('session.isAuthenticated')) {
      return this.store.queryRecord('radio', { me: true }).then((radio) => {
        this.set('radio', radio);
      });
    } else {
      return resolve();
    }
  }
});
