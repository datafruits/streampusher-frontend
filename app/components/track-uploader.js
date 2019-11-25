import Component from '@ember/component';
//import S3Uploader from 'ember-uploader/uploaders/s3';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import { get } from '@ember/object';
import ENV from "streampusher-frontend/config/environment";
import fetch from 'fetch';

export default Component.extend({
  //classNames: ['upload'],
  store: service(),
  flashMessages: service(),
  //droppedFile: service(),
  //multiple: true,
  signingUrl: `${ENV.API_HOST}/uploader_signature`,

  init() {
    this._super(...arguments);
    // this.droppedFile.on('fileWasDropped', e => {
    //   this.filesDidChange(e);
    // });
    this.set('validMimeTypes', ["audio/mp3", "audio/mpeg"]);
  },

  findBaseName(url) {
    var fileName = url.substring(url.lastIndexOf('/') + 1);
    var dot = fileName.lastIndexOf('.');
    return dot === -1 ? fileName : fileName.substring(0, dot);
  },

  filesDidChange(files) {

    const store = this.store;
    const _this = this;
    if (!isEmpty(files)) {
      for(let i = 0; i< files.length; i++){
        console.log(files[i].type);
        if(!this.validMimeTypes.includes(files[i].type)){
          console.log("invalid mime type: " + files[i].type);
          this.flashMessages.danger("Sorry, there was an error uploading this file. This doesn't appear to be a valid audio file.");
          continue;
        }

        let mimeType;
        if(files[i].type == "audio/mp3"){
          mimeType = "audio/mpeg";
        }else{
          mimeType = files[i].type;
        }

        console.log(mimeType);

        let uploader = S3Uploader.create({
          signingUrl: this.signingUrl,
          method: "PUT",
          ajaxSettings: {
            headers: {
              'Content-Type': mimeType,
              'x-amz-acl': 'public-read'
            }
          }
        });
        uploader.track = store.createRecord('track', { isUploading: true, audioFileName: files[i].name, filesize: files[i].size });
        window.onbeforeunload = function(e) {
          var dialogText = "You are currently uploading files. Closing this tab will cancel the upload operation! Are you usure you want to close this tab?";
          e.returnValue = dialogText;
          return dialogText;
        };

        uploader.on('didSign', function(response) {
          uploader.finalFileName = response.endpoint.split("?")[0];
        });

        uploader.on('didUpload', function(response) {
          window.onbeforeunload = null;
          this.track.set('audioFileName', this.finalFileName);
          this.track.set('isUploading', false);
          let onSuccess = () =>{
            console.log("track saved!");
            get(_this, 'flashMessages').success("Track uploaded!");
          };
          let onFail = (reason) => {
            console.log(`track save failed: ${reason}`);
            get(_this, 'flashMessages').danger("Sorry, something went wrong uploading this file!");
          };
          this.track.save().then(onSuccess).catch(onFail);
        });

        uploader.on('progress', function(e){
          this.track.set("uploadProgress", e.percent);
        });

        uploader.on('didError', (jqXHR, textStatus, errorThrown) => {
          window.onbeforeunload = null;
          get(_this, 'flashMessages').danger("Sorry, something went wrong!");
          console.log("ERROR!" + textStatus);
          console.log("ERROR!" + errorThrown);
        });

        uploader.upload(files[i]);
      }
    }
  },
  actions: {
    uploadTrack(file){
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
      fetch(`${this.signingUrl}?${searchParams}`).then(response => response.json()).then((data) => {
        return file.upload(data.endpoint, { method: 'PUT', headers: headers } );
      }).then((response) => {
        console.log(`uploaded: ${response}`);
        //track.set('audioFileName', this.finalFileName);
        track.set('isUploading', false);
        track.save().then(() => {
          console.log("track saved!");
          this.flashMessages.success("Track uploaded!");
        }).catch((reason) => {
          console.log(`track save failed: ${reason}`);
          this.flashMessages.danger("Sorry, something went wrong uploading this file!");
        });
      }).catch((error) => {
        console.log(`error: ${error}`);
      });
    }
  }
});
