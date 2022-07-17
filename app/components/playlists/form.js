import Component from '@glimmer/component';
import PlaylistValidations from '../../validations/playlist';
import lookupValidator from 'ember-changeset-validations';
import Changeset from 'ember-changeset';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PlaylistsFormComponent extends Component {
  @tracked changeset;

  @service flashMessages;

  @service router;

  validations = PlaylistValidations;

  @action
  save(event) {
    event.preventDefault();
    let onSuccess = () => {
      this.flashMessages.success('Created playlist!');
      this.router.transitionTo(
        'authenticated.playlists.show',
        this.args.model.id
      );
    };
    let onFail = (error) => {
      console.log('couldnt save playlist');
      console.log(error);
      this.flashMessages.danger('Something went wrong!');
    };
    this.changeset.validate().then(() => {
      if (this.changeset.isValid) {
        this.changeset.save().then(onSuccess, onFail);
      } else {
        this.flashMessages.danger('Fix errors before saving');
      }
    });
  }
}
