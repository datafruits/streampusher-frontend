import Component from '@glimmer/component';
import { action } from '@ember/object';
import fetch from 'fetch';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'streampusher-frontend/config/environment';

export default class SkipButtonFormComponent extends Component {
  @action
  skipTrack() {
    event.preventDefault();
    fetch(`${ENV.API_HOST}/skip_track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.session.data.authenticated.token}`,
      },
    })
      .then(() => {
        this.flashMessages.success('Skipped track!');
      })
      .catch((error) => {
        this.flashMessages.error('Error skipping track');
        console.log('error skipping track');
        console.log(error);
      });
  }
}
