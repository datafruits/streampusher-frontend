import Controller from '@ember/controller';
import { action } from '@ember/object';
import ENV from "streampusher-frontend/config/environment";

export default class RecordingsController extends Controller {
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
