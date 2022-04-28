import Component from '@glimmer/component';
import { action } from '@ember/object';
import ENV from 'streampusher-frontend/config/environment';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class RecordingsTableComponent extends Component {
  @service flashMessages;

  @service store;

  @tracked thingy = 'wat';

  @action
  fetchRecordings() {
    const query = { page: this.args.page };
    return this.store.query('recording', query);
  }

  @action
  resolvedRecordings(data) {
    console.log('resolved it');
    this.thingy = 'thingy';
    console.log(data);
  }

  @action
  doThingy() {
    console.log('do thingy!');
    this.thingy = 'did it!';
  }

  @action
  process(recording) {
    fetch(`${ENV.API_HOST}/recordings/${recording.id}/process_recordings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          this.flashMessages.success('Processing...');
          this.store.pushPayload(response.body);
        } else {
          this.flashMessages.danger('Something went wrong!');
        }
      })
      .catch((/* error */) => {
        this.flashMessages.danger('Something went wrong!');
      });
  }
}
