import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';

@classic
export default class RecordingsRoute extends Route {
  model() {
    return this.store.findAll('recording');
  }
}
