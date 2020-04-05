import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  store: service(),
  flashMessages: service(),
  isEditingSettings: false,
  isEditing: false,
  isSelectingPlaylist: false,
  isSyncingPlaylist: false,
  actions: {
    deletePlaylist(){
      if(confirm("Are you sure you want to delete this playlist?")){
        var playlist = this.playlist;
        this.set('isEditingSettings', false);
        playlist.destroyRecord().then(() => {
          this.transitionAfterDelete();
        });
      }
    },
    reorderItems(groupModel, itemModels, draggedModel) {
      this.setIsSyncingPlaylist(true);

      this.get('playlist.playlistTracks').map(function(playlistTrack){
        let newPosition = itemModels.findIndex(function(item){ return item.id == playlistTrack.id });
        playlistTrack.set('position', newPosition);
      });
      draggedModel.save().then(() => {
        this.set('playlist.playlistTracks', itemModels);
        console.log("reorderItems success");
        this.setIsSyncingPlaylist(false);
      }).catch((error) => {
        console.log("error");
        console.log(error);
        this.flashMessages.danger("Sorry, something went wrong!");
        this.setIsSyncingPlaylist(false);
      });
    },
    selectPlaylist(){
      this.toggleProperty('isSelectingPlaylist');
    },
    editPlaylist(){
      this.toggleProperty('isEditing');
    },
    cancelEditing(){
      this.toggleProperty('isEditing');
      if(this.playlist.get('isNew')){
        this.set('playlist', this.oldPlaylist);
      }
    },
    editPlaylistSettings(){
      this.toggleProperty('isEditingSettings');
    },
    newPlaylist(){
      var store = this.store;
      var playlist = store.createRecord('playlist');
      this.set('oldPlaylist', this.playlist);
      this.set('playlist', playlist);
      this.set('isEditing', true);
    },
    selectInterpolatedPlaylistId(playlistId) {
      var playlist = this.playlist;
      playlist.set('interpolatedPlaylistId', playlistId);
    },
    saveSettings() {
      var playlist = this.playlist;
      var onSuccess = () =>{
        this.set('isEditingSettings', false);
      };
      var onFail = () =>{
        console.log("playlist settings save failed");
        this.flashMessages.danger('Something went wrong!');
      };
      playlist.save().then(onSuccess, onFail);
    },
    save() {
      let playlist = this.playlist;
      let onSuccess = () =>{
        this.set('isEditing', false);
      };
      let onFail = () =>{
        console.log("playlist save failed");
        this.flashMessages.danger('Something went wrong!');
      };
      playlist.save().then(onSuccess, onFail);
    }
  }
});
