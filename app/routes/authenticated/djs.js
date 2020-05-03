import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class DjsRoute extends Route {
  @service store;
  async model(params) {
    params.page = params.page || 1;
    return hash({
      djs: this.store.query('user', {
        page: params.page,
        search: {
          keyword: params.query
        }
      }),
      dj: this.store.createRecord('user')
    });
  }
}
