import classic from 'ember-classic-decorator';
import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { resolve } from 'rsvp';

@classic
export default class CurrentRadioService extends Service {
  @service
  session;

  @service
  store;

  load() {
    if (this.get('session.isAuthenticated')) {
      return this.store.queryRecord('radio', { me: true }).then((radio) => {
        this.set('radio', radio);
      });
    } else {
      return resolve();
    }
  }
}
