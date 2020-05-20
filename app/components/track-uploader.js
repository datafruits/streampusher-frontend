import classic from 'ember-classic-decorator';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import ENV from "streampusher-frontend/config/environment";
import fetch from 'fetch';

@classic
export default class TrackUploader extends Component {
  @service
  session;

  @service
  store;

  @service
  flashMessages;

  signingUrl = `${ENV.API_HOST}/uploader_signature`;

  init() {
    super.init(...arguments);
    this.set('validMimeTypes', ["audio/mp3", "audio/mpeg"]);
  }

  @action
  uploadTrack(file) {
    window.onbeforeunload = function(e) {
      var dialogText = "You are currently uploading files. Closing this tab will cancel the upload operation! Are you usure you want to close this tab?";
      e.returnValue = dialogText;
      return dialogText;
    };
    let track = this.store.createRecord('track', { isUploading: true, audioFileName: file.name, filesize: file.size });
    let mimeType;
    if(file.type == "audio/mp3"){
      mimeType = "audio/mpeg";
    }else{
      mimeType = file.type;
    }

    const headers = {
      'Content-Type': mimeType,
      'x-amz-acl': 'public-read'
    }
    const params = { name: file.name, size: file.size, type: file.type };
    const searchParams = new URLSearchParams(Object.entries(params)).toString();
    fetch(`${this.signingUrl}?${searchParams}`, {
      headers: {
        'Authorization': `Bearer ${this.session.data.authenticated.token}`
      }
    }).then(response => response.json()).then((data) => {
      track.set('audioFileName', data.endpoint.split("?")[0]);
      return file.upload(data.endpoint, { method: 'PUT', headers: headers } );
    }).then((response) => {
      console.log(`uploaded: ${response}`);
      track.set('isUploading', false);
      track.save().then(() => {
        console.log("track saved!");
        this.flashMessages.success("Track uploaded!");
        window.onbeforeunload = null;
      }).catch((reason) => {
        console.log(`track save failed: ${reason}`);
        this.flashMessages.danger("Sorry, something went wrong uploading this file!");
        window.onbeforeunload = null;
      });
    }).catch((error) => {
      console.log(`error: ${error}`);
      window.onbeforeunload = null;
    });
  }
}
