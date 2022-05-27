import Model, { attr } from '@ember-data/model';
import { inject as service } from '@ember/service';
import ENV from 'streampusher-frontend/config/environment';

export default class Recording extends Model {
  @attr filesize;
  @attr path;
  @attr processingStatus;
  @service session;

  get unprocessed() {
    return this.processingStatus === 'unprocessed';
  }
  get processing() {
    return this.processingStatus === 'processing';
  }
  get processed() {
    return this.processingStatus === 'processed';
  }
  get processingFailed() {
    return this.processingStatus === 'processing_failed';
  }

  get downloadLink() {
    return `${ENV.API_HOST}/recordings/${this.id}?token=${this.session.data.authenticated.token}`;
  }
}
