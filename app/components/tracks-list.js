import classic from 'ember-classic-decorator';
import { classNames, classNameBindings } from '@ember-decorators/component';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { sort } from '@ember/object/computed';
import Component from '@ember/component';

@classic
@classNames('draggableDropzone')
@classNameBindings('dragClass')
export default class TracksList extends Component {
  @service
  store;

  dragClass = 'deactivated';
  filterText = '';

  init() {
    super.init(...arguments);
    this.set('selectedLabels', []);
  }

  @computed('filterText', 'selectedLabels')
  get isSearching() {
    return this.filterText !== "" || this.selectedLabels.length !== 0;
  }

  @computed('filterText', 'selectedLabels')
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

  // dragLeave(event) {
  //   event.preventDefault();
  //   //set(this, 'dragClass', 'deactivated');
  //   set(this, 'dragClass', 'opacity-50');
  //   $(".uploader-icon").hide();
  // },
  //
  // dragOver(event) {
  //   event.preventDefault();
  //   //set(this, 'dragClass', 'activated');
  //   set(this, 'dragClass', 'opacity-100');
  //   $(".uploader-icon").show();
  // },
  //
  // drop(event) {
  //   this.droppedFile.sendDroppedFile(event.dataTransfer.files);
  //   //event.dataTransfer.files[0]
  //   //var data = event.dataTransfer.getData('text/data');
  //   //this.sendAction('dropped', data);
  //
  //   //set(this, 'dragClass', 'deactivated');
  //   set(this, 'dragClass', 'opacity-50');
  //   $(".uploader-icon").hide();
  //   event.preventDefault();
  // },
  //
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
    this.set('filterText','');
  }
}
