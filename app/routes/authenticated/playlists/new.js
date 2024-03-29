import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class PlaylistsNewRoute extends Route {
  model() {
    return hash({
      playlist: this.store.createRecord('playlist'),
      labels: this.store.loadRecords('label'),
    });
  }
}
