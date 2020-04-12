import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';

@classic
export default class ShowRoute extends Route {
  model(params) {
    return this.store.loadRecord('scheduled-show', params.id);
  }
}
