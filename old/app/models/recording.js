import Model, { attr } from '@ember-data/model';

export default class Recording extends Model {
  @attr filesize;
  @attr path;
  @attr processingStatus;

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
}
