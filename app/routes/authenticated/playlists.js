import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default class PlaylistsRoute extends Route {
  model() {
    return hash({
      labels: this.store.loadRecords('label'),
    });
  }
}
