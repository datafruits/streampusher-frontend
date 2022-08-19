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
  onSubmit(/*result, event*/) {
    this.flashMessages.success('Created playlist!');
    this.router.transitionTo(
      'authenticated.playlists.show',
      this.args.model.id
    );
  }

  @action
  onError() {
    this.flashMessages.danger("Couldn't save playlist...check the form for errors");
  }
}
