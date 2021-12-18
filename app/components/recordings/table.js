import Component from '@glimmer/component';
import { action } from '@ember/object';
import ENV from "streampusher-frontend/config/environment";
import { inject as service } from "@ember/service";

export default class RecordingsTableComponent extends Component {
  @service flashMessages;

  @service router;

  @service store;

  @action
  fetchRecordings() {
    const query = {page: this.args.page};
    console.log(query);
    let recordingsPromise = this.store.query('recording', query);
    return recordingsPromise;
  }

  @action
  process(recording) {
    fetch(`${ENV.API_HOST}/recordings/${recording.id}/process_recordings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
    }).then((response) => {
      if(response.status === 200) {
        this.flashMessages.success('Processing...');
      } else {
        this.flashMessages.danger('Something went wrong!');
      }
    }).catch((/* error */) => {
      this.flashMessages.danger('Something went wrong!');
    });
  }
}
