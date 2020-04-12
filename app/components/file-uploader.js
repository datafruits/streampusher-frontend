import classic from 'ember-classic-decorator';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import ENV from "streampusher-frontend/config/environment";
import fetch from 'fetch';

@classic
export default class FileUploader extends Component {
  @service
  session;

  @service
  store;

  @service
  flashMessages;

  signingUrl = `${ENV.API_HOST}/uploader_signature`;

  @action
  upload(file) {
    window.onbeforeunload = function(e) {
      var dialogText = "You are currently uploading files. Closing this tab will cancel the upload operation! Are you usure you want to close this tab?";
      e.returnValue = dialogText;
      return dialogText;
    };
    let image = this.store.createRecord('blogPostImage',
      {
        blogPostBody: this.blogPostBody,
        isUploading: true,
        imageFileName: file.name,
        filesize: file.size });
    let mimeType = file.type;
    const headers = {
      'Content-Type': mimeType,
      'x-amz-acl': 'public-read'
    }
    const params = { name: file.name, size: file.size, type: mimeType };
    const searchParams = new URLSearchParams(Object.entries(params)).toString();
    const signingUrl = `${this.signingUrl}?${searchParams}`;
    fetch(signingUrl, {
      headers: {
        'Authorization': `Bearer ${this.session.data.authenticated.token}`
      }
    }).then(response => response.json()).then((data) => {
      return file.uploadBinary(data.endpoint, { method: 'PUT', headers: headers } );
    }).then((response) => {
      console.log(`uploaded: ${response}`);
      //track.set('audioFileName', this.finalFileName);
      image.set('isUploading', false);
      image.save().then(() => {
        console.log("image saved!");
        this.flashMessages.success("Image uploaded!");
        this.insertImageMarkdown(image);
        window.onbeforeunload = null;
      }).catch((reason) => {
        console.log(`image save failed: ${reason}`);
        this.flashMessages.danger("Sorry, something went wrong uploading this file!");
        window.onbeforeunload = null;
      });
    }).catch((error) => {
      console.log(`error: ${error}`);
      window.onbeforeunload = null;
    });
  }
}
