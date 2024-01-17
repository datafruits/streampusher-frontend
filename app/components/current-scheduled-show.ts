import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import ENV from 'streampusher-frontend/config/environment';

interface CurrentScheduledShowArgs {}

export default class CurrentScheduledShow extends Component<CurrentScheduledShowArgs> {
  @service declare session: any;
  @service declare flashMessages: any;

  @action queueCurrentShowPlaylist() {
    try {
      fetch(`${ENV.API_HOST}/queue_current_show`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.session.data.authenticated.token}`,
        },
      }).then((response) => {
        if (response.status === 200) {
          this.flashMessages.success('Queue current show playlist!');
        } else {
          this.flashMessages.danger('Something went wrong!');
        }
      })
    } catch(error) {
      this.flashMessages.error('Error queueing current show playlist!');
      console.log('error queuing current show playlist');
      console.log(error);
    }
  }

  @action
  fetchCurrentScheduledShow() {
  }
}
