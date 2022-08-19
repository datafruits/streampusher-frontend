import Component from '@glimmer/component';
import { action } from '@ember/object';
import ENV from 'streampusher-frontend/config/environment';
import fetch from 'fetch';

export default class LiquidsoapRequests extends Component {
  @action
  async fetchLiquidsoapRequests() {
    let response = await fetch(`${ENV.APP['API_HOST']}/liquidsoap_requests`);
    return response.json();
  }
}
