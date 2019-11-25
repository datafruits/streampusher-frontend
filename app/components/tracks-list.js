import { sort } from '@ember/object/computed';
//import $ from 'jquery';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  store: service(),
  //droppedFile: service(),
  classNames        : [ 'draggableDropzone' ],
  classNameBindings : [ 'dragClass' ],
  dragClass         : 'deactivated',
  filterText: '',

  init() {
    this._super(...arguments);
    this.set('selectedLabels', []);
  },

  isSearching: computed('filterText', 'selectedLabels', function() {
    return this.filterText !== "" || this.selectedLabels.length !== 0;
  }),

  filteredResults: computed('filterText', 'selectedLabels', function() {
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
  }),

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
  sortedTracks: sort('tracks', function(a, b){
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
  }),
  actions: {
    clearSearch(){
      this.set('filterText','');
    }
  }
});
