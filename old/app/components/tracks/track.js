import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import { action } from '@ember/object';

export default class Track extends Component {
  @service
  store;

  @service
  router;

  @service
  flashMessages;

  isSaving = false;

  get uploadProgressStyle() {
    return htmlSafe(`width: ${this.args.track.roundedUploadProgress}%;`);
  }

  get currentPlaylist() {
    if (this.router.currentRoute.paramNames.includes('id')) {
      return this.store.peekRecord(
        'playlist',
        this.router.currentRoute.params['id']
      );
    } else {
      return null;
    }
  }

  @action
  addToPlaylist() {
    if (this.currentPlaylist) {
      let store = this.store;
      let playlist = this.currentPlaylist;
      let track = this.args.track;
      playlist.get('playlistTracks').map(function (playlistTrack) {
        let position = playlistTrack.position;
        playlistTrack.set('position', position + 1);
      });
      let playlistTrack = store.createRecord('playlist-track', {
        track: track,
        playlist: playlist,
        position: 0,
        displayName: track.get('displayName'),
      });
      playlist.get('playlistTracks').pushObject(playlistTrack);
      playlistTrack
        .save()
        .then(() => {
          playlist.save().then(() => {
            console.log('addToPlaylist success');
            //this.setIsSyncingPlaylist(false);
          });
        })
        .catch((error) => {
          console.log('error');
          console.log(error);
          //this.setIsSyncingPlaylist(false);
          this.flashMessages.danger('Something went wrong!');
        });
    }
  }
}
