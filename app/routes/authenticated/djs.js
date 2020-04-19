import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class DjsRoute extends Route {
  @service store;
  async model() {
    return hash({
      djs: this.store.findAll('user'),
      dj: this.store.createRecord('user')
    });
  }
}
