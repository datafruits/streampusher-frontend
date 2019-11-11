import { get } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'td',
  classNames: ['track', 'playlist-track'],
  isEditing: false,
  actions: {
    deleteFromPlaylist(){
      let playlistTrack = this.playlistTrack;
      playlistTrack.destroyRecord();
    },
    editPlaylistTrack(){
      this.set('isEditing', true);
    },
    save(){
      let playlistTrack = this.playlistTrack;
      let onSuccess = () =>{
      };
      let onFail = () =>{
        this.flashMessages.danger('Something went wrong!');
      };
      playlistTrack.save().then(onSuccess, onFail);
      this.set('isEditing', false);
    },
    cancel(){
      this.set('isEditing', false);
    }
  }
});
