import Component from '@glimmer/component';
import { action } from '@ember/object';
import ENV from 'streampusher-frontend/config/environment';
import { inject as service } from '@ember/service';

export default class RecordingsTableComponent extends Component {
  @service flashMessages;

  @service store;

  @action
  fetchRecordings() {
    const query = { page: this.args.page };
    return this.store.query('recording', query);
  }

  @action
  process(recording) {
    try {
      fetch(`${ENV.API_HOST}/recordings/${recording.id}/process_recordings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.session.data.authenticated.token}`,
        },
      }).then((response) => {
        if (response.status === 200) {
          this.flashMessages.success('Processing...');
          response.json().then((json) => {
            this.store.pushPayload(json);
          });
        } else {
          this.flashMessages.danger('Something went wrong!');
        }
      });
    } catch(error)  {
      this.flashMessages.danger('Something went wrong!');
      console.log(error);
    }
  }
}
