import classic from 'ember-classic-decorator';
import { action } from '@ember/object';
import { classNames, tagName } from '@ember-decorators/component';
import Component from '@ember/component';

@classic
@tagName('td')
@classNames('track', 'playlist-track')
export default class PlaylistTrackLi extends Component {
  isEditing = false;

  @action
  deleteFromPlaylist() {
    let playlistTrack = this.playlistTrack;
    playlistTrack.destroyRecord();
  }

  @action
  editPlaylistTrack() {
    this.set('isEditing', true);
  }

  @action
  save() {
    let playlistTrack = this.playlistTrack;
    let onSuccess = () =>{
    };
    let onFail = () =>{
      this.flashMessages.danger('Something went wrong!');
    };
    playlistTrack.save().then(onSuccess, onFail);
    this.set('isEditing', false);
  }

  @action
  cancel() {
    this.set('isEditing', false);
  }
}
