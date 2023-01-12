import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import ENV from 'streampusher-frontend/config/environment';
import fetch from 'fetch';

export default class HostApplicationsTable extends Component {
  @service currentUser;
  @service session;

  @action approve(hostApplication){
    fetch(`${ENV.API_HOST}/host_applications/${hostApplication.id}/approvals.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.session.data.authenticated.token}`,
      },
      //body: JSON.stringify(data),
    })
      .then(() => {
        hostApplication.approved = true;
      });
  }
}
