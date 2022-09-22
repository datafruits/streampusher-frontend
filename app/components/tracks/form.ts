import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import { action } from '@ember/object';
import { debounce } from '@ember/runloop';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';
import Store from '@ember-data/store';
import TrackValidations from '../../validations/track';

interface TracksFormArgs {
  model: any;
}

export default class TracksForm extends Component<TracksFormArgs> {
  TrackValidations: any = TrackValidations;
  @service declare store: Store;
  @service declare flashMessages: any;
  @service declare router: any;

  @service declare currentUser: any;

  get uploadProgressStyle() {
    return htmlSafe(`width: ${this.args.model.roundedUploadProgress}%;`);
  }

  @action
  searchShows(term: string) {
    return new RSVP.Promise((resolve, reject) => {
      debounce(this, this._performSearch, term, resolve, reject, 600);
    });
  }

  _performSearch(term: string, resolve: any, reject: any) {
    this.store.query('scheduledShow', { term: term }).then((scheduledShows: any) => {
      return resolve(scheduledShows);
    }, reject);
  }

  @action
  onSubmit() {
    this.flashMessages.success('Saved track!');
    this.router.transitionTo('authenticated.playlists');
  }

  @action
  onError() {
    this.flashMessages.danger("Couldn't save track...check the form for errors");
  }

  get canDelete() {
    return this.currentUser.user.isAdmin || this.args.model.uploadedBy == this.currentUser.user;
  }

  @action
  delete() {
    if (confirm('Are you sure you want to delete this track?')) {
      let track = this.args.model;
      track.destroyRecord().then(() => {
        this.flashMessages.success('Deleted track!');
        this.router.transitionTo('authenticated.playlists');
      });
    }
  }
}
