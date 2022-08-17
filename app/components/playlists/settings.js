import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import PlaylistValidations from '../../validations/playlist';
import lookupValidator from 'ember-changeset-validations';
import Changeset from 'ember-changeset';

export default class PlaylistsSettingsComponent extends Component {
  constructor() {
    super(...arguments);
    this.changeset = new Changeset(
      this.args.playlist,
      lookupValidator(PlaylistValidations),
      PlaylistValidations
    );
  }

  @service store;

  @action
  saveSettings(e) {
    e.preventDefault();
    var onSuccess = () => {
      this.args.closeSettings();
    };
    var onFail = () => {
      console.log('playlist settings save failed');
      this.flashMessages.danger('Something went wrong!');
    };
    // var playlist = this.args.playlist;
    // playlist.save().then(onSuccess, onFail);
    this.changeset.validate().then(() => {
      if (this.changeset.isValid) {
        this.changeset.save().then(onSuccess, onFail);
      } else {
        this.flashMessages.danger('Fix errors before saving');
      }
    });
  }

  @action
  deletePlaylist() {
    if (confirm('Are you sure you want to delete this playlist?')) {
      var playlist = this.changeset;
      playlist.destroyRecord().then(() => {
        this.args.closeSettings();
        //TODO use router service??
        this.args.transitionAfterDelete();
      });
    }
  }
}
