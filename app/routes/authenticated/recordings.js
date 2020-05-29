import Route from '@ember/routing/route';

export default class RecordingsRoute extends Route {
  model() {
    return this.store.findAll('recording');
  }
}
