import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Store from '@ember-data/store';
import TrackValidations from '../../validations/track';

interface TracksFormArgs {
  model: any;
}

export default class TracksForm extends Component<TracksFormArgs> {
  TrackValidations: any = TrackValidations;
  @service declare store: Store;
  @service declare flashMessages: any;
  @service declare router: any;
  @service declare currentUser: any;
  @service declare history: any;

  get uploadProgressStyle() {
    return htmlSafe(`width: ${this.args.model.roundedUploadProgress}%;`);
  }

  @action
  onSubmit() {
    this.flashMessages.success('Saved track!');
    const previousRoute = this.history.previousRoute;
    if(previousRoute) {
      this.router.transitionTo(previousRoute);
    }
  }

  @action
  onError() {
    this.flashMessages.danger("Couldn't save track...check the form for errors");
  }

  get canDelete() {
    return this.currentUser.user.isAdmin || this.args.model.uploadedBy == this.currentUser.user;
  }

  @action
  delete() {
    if (confirm('Are you sure you want to delete this track?')) {
      let track = this.args.model;
      track.destroyRecord().then(() => {
        this.flashMessages.success('Deleted track!');
        const previousRoute = this.history.previousRoute;
        if(previousRoute) {
          this.router.transitionTo(previousRoute);
        }
      });
    }
  }
}
