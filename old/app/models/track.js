import Model, { hasMany, belongsTo, attr } from '@ember-data/model';
import { htmlSafe } from '@ember/template';
import { equal, or } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Model.extend({
  labels: hasMany('labels'),
  scheduledShow: belongsTo('scheduled-show'),
  uploadedBy: attr(),
  labelIds: attr(),
  createdAt: attr(),
  updatedAt: attr(),
  audioFileName: attr(),
  filesize: attr(),
  displayName: attr(),
  artist: attr(),
  title: attr(),
  album: attr(),
  artwork: attr('file'),
  artworkFilename: attr(),
  mixcloudUploadStatus: attr(),
  mixcloudKey: attr(),
  soundcloudUploadStatus: attr(),
  soundcloudKey: attr(),
  embedLink: attr(),
  formattedDuration: attr(),
  isUploading: false,
  uploadProgress: 0,

  roundedUploadProgress: computed('uploadProgress', function () {
    return Math.round(this.uploadProgress);
  }),
  mixcloudNotUploaded: equal('mixcloudUploadStatus', 'mixcloud_not_uploaded'),
  mixcloudUploading: equal('mixcloudUploadStatus', 'mixcloud_uploading'),
  mixcloudUploadComplete: equal(
    'mixcloudUploadStatus',
    'mixcloud_upload_complete'
  ),
  mixcloudUploadFailed: equal('mixcloudUploadStatus', 'mixcloud_upload_failed'),
  mixcloudNotUploadedOrUploadFailed: or(
    'mixcloudNotUploaded',
    'mixcloudUploadFailed'
  ),

  soundcloudNotUploaded: equal(
    'soundcloudUploadStatus',
    'soundcloud_not_uploaded'
  ),
  soundcloudUploading: equal('soundcloudUploadStatus', 'soundcloud_uploading'),
  soundcloudUploadComplete: equal(
    'soundcloudUploadStatus',
    'soundcloud_upload_complete'
  ),
  soundcloudUploadFailed: equal(
    'soundcloudUploadStatus',
    'soundcloud_upload_failed'
  ),
  soundcloudNotUploadedOrUploadFailed: or(
    'soundcloudNotUploaded',
    'soundcloudUploadFailed'
  ),

  embedCode: computed('embedLink', function () {
    return `<iframe width="100%" height="100" frameborder="no" scrolling="no" src="${this.embedLink}"></iframe>`;
  }),

  embedCodeSafe: computed('embedLink', function () {
    return htmlSafe(
      `<iframe width="100%" height="100%" frameborder="no" scrolling="no" src="${this.embedLink}"></iframe>`
    );
  }),
});
