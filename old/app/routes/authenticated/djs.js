import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import { action } from '@ember/object';

export default class DjsRoute extends Route {
  @service store;
  async model(params) {
    params.page = params.page || 1;
    return hash({
      djs: this.store.query('user', {
        page: params.page,
        search: {
          keyword: params.query,
        },
      }),
      dj: this.store.createRecord('user'),
    });
  }

  @action
  save(dj) {
    dj.save()
      .then(() => {
        console.log('in save');
        this.flashMessages.success('Saved user!');
        //this.clearForm();
        this.refresh();
      })
      .catch((error) => {
        this.flashMessages.danger("Couldn't save user!");
        console.log(error);
      });
  }
}
