import classic from 'ember-classic-decorator';
import { action } from '@ember/object';
import Route from '@ember/routing/route';
import { hash } from 'rsvp';

@classic
export default class ShowRoute extends Route {
  @action
  transitionAfterDelete() {
    let playlist = this.store.findAll('playlist').then((playlists) => {
      let id = playlists.objectAt(playlists.get('length')-1).get('id');
      this.transitionTo('playlists.show', id);
    });
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('isSyncingPlaylist', false);
  }

  model(params) {
    return hash({
      playlist: this.store.loadRecord('playlist', params.id),
      //tracks: this.store.findAll('track'),
      //playlists: this.store.loadRecords('playlist'),
      labels: this.store.loadRecords('label')
    });
  }
}
