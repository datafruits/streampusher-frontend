import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';

@classic
export default class PodcastsRoute extends Route {
  model() {
    this.store.findAll('podcast');
  }
}
