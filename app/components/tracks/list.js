import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { task, timeout } from 'ember-concurrency';

export default class TracksList extends Component {
  @service
  store;

  @service
  router;

  @tracked tracks = [];
  @tracked tracksQuery;
  @tracked meta;

  // FIXME sort with @tracked instead??
  // @sort('tracks', function(a, b){
  //   if(a.isUploading || b.isUploading){
  //     if(a.isUploading && b.isUploading){
  //       return 0;
  //     } else if(a.isUploading){
  //       return -1;
  //     } else if(b.isUploading){
  //       return 1;
  //     }
  //   } else {
  //     if(a.get('createdAt') === b.get('createdAt')){
  //     } else if(a.get('createdAt') > b.get('createdAt')){
  //       return -1;
  //     } else if(a.get('createdAt') < b.get('createdAt')){
  //       return 1;
  //     }
  //   }
  // })
  // sortedTracks;
  //
  get sortedTracks() {
    return this.tracks.sort((a, b) => {
      if(a.isUploading || b.isUploading){
        if(a.isUploading && b.isUploading){
          return 0;
        } else if(a.isUploading){
          return -1;
        } else if(b.isUploading){
          return 1;
        }
      } else {
        if(a.get('createdAt') === b.get('createdAt')){
          return 0;
        } else if(a.get('createdAt') > b.get('createdAt')){
          return -1;
        } else if(a.get('createdAt') < b.get('createdAt')){
          return 1;
        }
      }
    });
  }

  @action
  pushTrack(track) {
    this.tracks.pushObject(track);
  }

  @action
  performTask() {
    this.fetchTracks.perform();
  }

  @(task(function* () {
    yield timeout(1000);
    const query = {
      page: this.args.searchParams.page,
      search: { keyword: this.args.searchParams.tracksQuery },
    };
    let tracks = this.store.query('track', query).then((tracks) => {
      this.meta = tracks.meta;
      return tracks;
    });
    let resolvedTracks = yield tracks;
    return (this.tracks = resolvedTracks.toArray());
  }).restartable())
  fetchTracks;
}
