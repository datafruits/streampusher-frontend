import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TracksList extends Component {
  @service
  store;

  @service
  router;

  @tracked tracks = [];
  @tracked tracksQuery;

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

  @action
  pushTrack(track) {
    this.tracks.pushObject(track);
  }

  @action
  fetchTracks() {
    const query = {
      page: this.args.searchParams.page,
      search: { keyword: this.args.searchParams.tracksQuery },
    };
    let tracksPromise = this.store.query('track', query);
    return tracksPromise;
  }
}
