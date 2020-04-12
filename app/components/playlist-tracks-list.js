import classic from 'ember-classic-decorator';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

@classic
export default class PlaylistTracksList extends Component {
  @service
  store;

  @service
  flashMessages;

  isEditingSettings = false;
  isEditing = false;
  isSelectingPlaylist = false;
  isSyncingPlaylist = false;

  @action
  deletePlaylist() {
    if(confirm("Are you sure you want to delete this playlist?")){
      var playlist = this.playlist;
      this.set('isEditingSettings', false);
      playlist.destroyRecord().then(() => {
        this.transitionAfterDelete();
      });
    }
  }

  @action
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
  }

  @action
  selectPlaylist() {
    this.toggleProperty('isSelectingPlaylist');
  }

  @action
  editPlaylist() {
    this.toggleProperty('isEditing');
  }

  @action
  cancelEditing() {
    this.toggleProperty('isEditing');
    if(this.playlist.get('isNew')){
      this.set('playlist', this.oldPlaylist);
    }
  }

  @action
  editPlaylistSettings() {
    this.toggleProperty('isEditingSettings');
  }

  @action
  newPlaylist() {
    var store = this.store;
    var playlist = store.createRecord('playlist');
    this.set('oldPlaylist', this.playlist);
    this.set('playlist', playlist);
    this.set('isEditing', true);
  }

  @action
  selectInterpolatedPlaylistId(playlistId) {
    var playlist = this.playlist;
    playlist.set('interpolatedPlaylistId', playlistId);
  }

  @action
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
  }

  @action
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
