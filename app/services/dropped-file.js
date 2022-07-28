import Evented from '@ember/object/evented';
import Service from '@ember/service';

export default class DroppedFileService extends Service.extend(Evented) {
  sendDroppedFile(file) {
    console.log(file);
    this.trigger('fileWasDropped', file);
  }
}
