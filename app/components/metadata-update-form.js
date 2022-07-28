import Component from '@glimmer/component';
import { action } from '@ember/object';
import fetch from 'fetch';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'streampusher-frontend/config/environment';

export default class MetadataUpdateForm extends Component {
  @service flashMessages;
  @service session;
  @service eventBus;
  @service metadata;

  @tracked title;

  constructor() {
    super(...arguments);
    this.eventBus.subscribe('metadataUpdate', this, 'setTitle');
  }

  setTitle() {
    this.title = this.metadata.title;
  }

  @action
  updateMetadata(event) {
    event.preventDefault();
    const data = { metadata: { title: this.title } };
    fetch(`${ENV.API_HOST}/metadata`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.session.data.authenticated.token}`,
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        this.flashMessages.success('Updated stream title!');
      })
      .catch((error) => {
        this.flashMessages.error('error updating stream title');
        console.log('error updating metadata');
        console.log(error);
      });
  }
}
