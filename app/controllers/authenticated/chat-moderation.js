import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import fetch from 'fetch';
import ENV from "streampusher-frontend/config/environment";

export default class AuthenticatedChatModerationController extends Controller {
  @service
  session;

  @service
  flashMessages;

  @action
  fetchChatBans() {
    return fetch(`${ENV.API_HOST}/chat_bans.json`, {
      headers: {
        'Authorization': `Bearer ${this.session.data.authenticated.token}`
      }
    }).then((response) => {
      return response.json();
    }).catch((error) => {
      console.log('error fetching chat bans');
      console.log(error);
    });
  }

  @action
  ban(connection, event) {
    event.preventDefault();
    const data  = { 'chat_ban': { socket_id: connection } };
    fetch(`${ENV.API_HOST}/chat_bans.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.session.data.authenticated.token}`
      },
      body: JSON.stringify(data)
    }).then((response) => {
      this.flashMessages.success("banned IP address!")
    }).catch((error) => {
      this.flashMessages.error("something went wrong!")
    });
  }

  @action
  unban(ban, event) {
    event.preventDefault();
    const data  = { 'chat_ban': { ip_address: ban } };
    fetch(`${ENV.API_HOST}/chat_bans.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.session.data.authenticated.token}`
      },
      body: JSON.stringify(data)
    }).then((response) => {
      this.flashMessages.success("banned IP address!")
    }).catch((error) => {
      this.flashMessages.error("something went wrong!")
    });
  }
}
