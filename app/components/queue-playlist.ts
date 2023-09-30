import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import ENV from 'streampusher-frontend/config/environment';

export default class QueuePlaylist extends Component {
  @service declare session: any;
  @service declare flashMessages: any;
  @action
  async queuePlaylist() {
    const response = await fetch(`${ENV.API_HOST}/radios/queue_current_show`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.session.data.authenticated.token}`,
      },
    });
    if(response.ok) {
        this.flashMessages.success("Queue current show's playlist!");
    } else {
        this.flashMessages.danger('error queueing current show playlist');
    }
  }
}
