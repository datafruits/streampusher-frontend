import { htmlSafe } from '@ember/template';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import Component from '@ember/component';

export default Component.extend({
  store: service(),
  ajax: service(),
  flashMessages: service(),
  tagName: 'tr',
  classNames: ['track'],
  isEditing: false,
  isSaving: false,
  mixcloudDialog: false,
  soundcloudDialog: false,
  embedDialog: false,
  isAddingNewPlaylist: computed('playlist.id', function(){
    let playlist = this.playlist;
    return playlist.isNew;
  }),
  didInsertElement(){
    if(!isEmpty($("#app-data").data('connected-accounts'))){
      this.set('hasMixcloudAccount', $("#app-data").data('connected-accounts').any(function(s){ return s.provider === "mixcloud" }));
      this.set('hasSoundcloudAccount', $("#app-data").data('connected-accounts').any(function(s){ return s.provider === "soundcloud" }));
    }
  },
  uploadProgressStyle: computed('track.roundedUploadProgress', function(){
    return htmlSafe(`width: ${this.track.roundedUploadProgress}%;`);
  }),
  actions: {
    addToPlaylist(){
      this.setIsSyncingPlaylist(true);
      let store = this.store;
      let playlist = this.playlist;
      let track = this.track;
      playlist.get('playlistTracks').map(function(playlistTrack){
        let position = playlistTrack.position;
        playlistTrack.set('position', position+1);
      });
      let playlistTrack = store.createRecord('playlist_track', { track: track, playlist: playlist, position: 0, displayName: track.get('displayName') });
      playlist.get('playlistTracks').pushObject(playlistTrack);
      playlistTrack.save().then(() => {
        playlist.save().then(() => {
          console.log("addToPlaylist success");
          this.setIsSyncingPlaylist(false);
        });
      }).catch((error) => {
        console.log("error");
        console.log(error);
        this.setIsSyncingPlaylist(false);
        this.flashMessages.danger('Something went wrong!');
      });
    },
    editTrack(){
      this.toggleProperty('isEditing');
    },
    focusEmbedCode(){
      this.select();
    },
    mixcloud(){
      this.set('isEditing', false);
      this.toggleProperty('mixcloudDialog');
    },
    embed(){
      this.set('isEditing', false);
      this.toggleProperty('embedDialog');
    },
    uploadToMixcloud(){
      let trackId = this.track.get('id');
      let url = `/tracks/${trackId}/mixcloud_uploads`;
      return this.ajax.request(url, {
        method: 'POST'
      }).then(response => {
        console.log(response);
        if(response.status === 200){
          this.track.set('mixcloudUploadStatus', 'mixcloud_uploading');
        }else{
          this.flashMessages.danger('Something went wrong!');
        }
      });

    },
    uploadToSoundcloud(){
      let trackId = this.track.get('id');
      let url = `/tracks/${trackId}/soundcloud_uploads`;
      return this.ajax.request(url, {
        method: 'POST'
      }).then(response => {
        console.log(response);
        if(response.status === 200){
          this.track.set('soundcloudUploadStatus', 'soundcloud_uploading');
        }else{
          get(this, 'flashMessages').danger('Something went wrong!');
        }
      });

    },
    save(){
      this.set('isSaving', true);
      let track = this.track;
      const onSuccess = () => {
        this.set('isEditing', false);
        this.set('isSaving', false);
      };
      const onFail = (reason) => {
        console.log(`track save failed: ${reason}`);
        this.flashMessages.danger('Something went wrong!');
        this.set('isSaving', false);
      };
      track.save().then(onSuccess).catch(onFail);
    },
    cancel(){
      this.set('isEditing', false);
    },
    destroy(){
      if(confirm("Are you sure you want to delete this track?")){
        var track = this.track;
        // FIXME does this get removed from the playlist as well?
        track.destroyRecord();
      }
    },
    soundcloud(){
      this.set('isEditing', false);
      this.toggleProperty('soundcloudDialog');
    }
  }
});
