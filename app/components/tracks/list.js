import { action } from '@ember/object';
import { sort } from '@ember/object/computed';
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

  @sort('tracks', function(a, b){
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
      } else if(a.get('createdAt') > b.get('createdAt')){
        return -1;
      } else if(a.get('createdAt') < b.get('createdAt')){
        return 1;
      }
    }
  })
  sortedTracks;


  @action
  pushTrack(track){
    this.tracks.pushObject(track);
  }

  @action
  performTask(){
    let query = this.args.searchParams;
    this.fetchData.perform(query);
  }

  @(task(function*(query) {
    yield timeout(1000);
    let tracks = this.store.query('track', {
        page: query.page,
        search: {
          keyword: query.tracksQuery
        }
      });
    let resolvedTracks = yield tracks;
    this.tracksQuery = resolvedTracks;
    return this.tracks = resolvedTracks.toArray();
  }).restartable())
  fetchData;
}
