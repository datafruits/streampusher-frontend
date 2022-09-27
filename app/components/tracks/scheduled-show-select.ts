import Component from '@glimmer/component';
import { action } from '@ember/object';
import Store from '@ember-data/store';
import { debounce } from '@ember/runloop';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

interface TracksScheduledShowSelectArgs {
  changeset: any;
  scheduledShows: any;
}

export default class TracksScheduledShowSelect extends Component<TracksScheduledShowSelectArgs> {
  @service declare store: Store;

  @action
  setScheduledShow(scheduledShow: any) {
    this.args.changeset.set('scheduledShow', scheduledShow);
    this.args.changeset.set('scheduledShowId', scheduledShow.id);
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
}
