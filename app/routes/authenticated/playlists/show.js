import { action } from '@ember/object';
import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default class ShowRoute extends Route {
  @service history;

  @action
  transitionAfterDelete() {
    this.store.findAll('playlist').then((playlists) => {
      let id = playlists.objectAt(playlists.get('length') - 1).get('id');
      this.transitionTo('playlists.show', id);
    });
  }

  model(params) {
    return hash({
      playlist: this.store.findRecord('playlist', params.id),
      labels: this.store.loadRecords('label'),
    });
  }

  afterModel() {
    console.log('setting history');
    console.log(this.fullRouteName);
    this.history.previousRoute = this.fullRouteName;
  }
}
