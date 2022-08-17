import classic from 'ember-classic-decorator';
import { computed } from '@ember/object';
import { or, equal } from '@ember/object/computed';
import Model, { hasMany, belongsTo, attr } from '@ember-data/model';
import { htmlSafe } from '@ember/template';

@classic
export default class Track extends Model {
  @hasMany('labels')
  labels;

  @belongsTo('scheduled-show')
  scheduledShow;

  @attr()
  uploadedBy;

  @attr()
  labelIds;

  @attr()
  createdAt;

  @attr()
  updatedAt;

  @attr()
  audioFileName;

  @attr()
  filesize;

  @attr()
  displayName;

  @attr()
  artist;

  @attr()
  title;

  @attr()
  album;

  // @attr('file')
  // artwork;
  @attr artwork;

  @attr()
  artworkFilename;

  @attr()
  mixcloudUploadStatus;

  @attr()
  mixcloudKey;

  @attr()
  soundcloudUploadStatus;

  @attr()
  soundcloudKey;

  @attr()
  embedLink;

  @attr()
  formattedDuration;

  isUploading = false;
  uploadProgress = 0;

  @computed('uploadProgress')
  get roundedUploadProgress() {
    return Math.round(this.uploadProgress);
  }

  @equal('mixcloudUploadStatus', 'mixcloud_not_uploaded')
  mixcloudNotUploaded;

  @equal('mixcloudUploadStatus', 'mixcloud_uploading')
  mixcloudUploading;

  @equal('mixcloudUploadStatus', 'mixcloud_upload_complete')
  mixcloudUploadComplete;

  @equal('mixcloudUploadStatus', 'mixcloud_upload_failed')
  mixcloudUploadFailed;

  @or('mixcloudNotUploaded', 'mixcloudUploadFailed')
  mixcloudNotUploadedOrUploadFailed;

  @equal('soundcloudUploadStatus', 'soundcloud_not_uploaded')
  soundcloudNotUploaded;

  @equal('soundcloudUploadStatus', 'soundcloud_uploading')
  soundcloudUploading;

  @equal('soundcloudUploadStatus', 'soundcloud_upload_complete')
  soundcloudUploadComplete;

  @equal('soundcloudUploadStatus', 'soundcloud_upload_failed')
  soundcloudUploadFailed;

  @or('soundcloudNotUploaded', 'soundcloudUploadFailed')
  soundcloudNotUploadedOrUploadFailed;

  @computed('embedLink')
  get embedCode() {
    return `<iframe width="100%" height="100" frameborder="no" scrolling="no" src="${this.embedLink}"></iframe>`;
  }

  @computed('embedLink')
  get embedCodeSafe() {
    return htmlSafe(
      `<iframe width="100%" height="100%" frameborder="no" scrolling="no" src="${this.embedLink}"></iframe>`
    );
  }
}
