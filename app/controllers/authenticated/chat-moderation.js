import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import fetch from 'fetch';
import ENV from "streampusher-frontend/config/environment";

export default class AuthenticatedChatModerationController extends Controller {
  @service
  session;

  @action
  fetchChatBans() {
    fetch(`${ENV.API_HOST}/chat_bans.json`, {
      headers: {
        'Authorization': `Bearer ${this.session.data.authenticated.token}`
      }
    }).then((response) => {
      return response.body;
    }).catch((error) => {
      console.log('error fetching chat bans');
      console.log(error);
    });
  }
}
