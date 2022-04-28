import Route from '@ember/routing/route';

export default class PodcastsRoute extends Route {
  model() {
    this.store.findAll('podcast');
  }
}
