import { action } from '@ember/object';
import { sort } from '@ember/object/computed';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class TracksList extends Component {
  @tracked filterText = '';

  @tracked selectedLabels = [];

  get isSearching() {
    return this.filterText !== "" || this.selectedLabels.length !== 0;
  }

  get filteredResults() {
    let filter = this.filterText;
    let labelIds = this.selectedLabels.map(function(label){
      return parseInt(label.get('id'));
    });
    return this.tracks.filter(function(item) {
      if(item.get('isUploading')){
        return false;
      }
      if(labelIds.length != 0){
        if(_.intersection(item.get('labelIds'), labelIds).length !== labelIds.length){
          return false
        }
      }
      return item.get('displayName').toLowerCase().indexOf(filter) !== -1;
    });
  }

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
  clearSearch() {
    this.filterText = '';
  }
}
