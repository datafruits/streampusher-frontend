import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class PlaylistsTrack extends Component {
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
    let onSuccess = () => {};
    let onFail = () => {
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
