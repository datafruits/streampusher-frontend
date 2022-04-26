import Service, { inject as service } from '@ember/service';
import { resolve } from 'rsvp';
import { tracked } from '@glimmer/tracking';

export default class CurrentRadioService extends Service {
  @service
  session;

  @service
  store;

  @tracked radio;

  load() {
    if (this.get('session.isAuthenticated')) {
      return this.store.queryRecord('radio', { me: true }).then((radio) => {
        this.radio = radio;
      });
    } else {
      return resolve();
    }
  }
}
