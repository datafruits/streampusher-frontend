import classic from 'ember-classic-decorator';
import Evented from '@ember/object/evented';
import Service from '@ember/service';

@classic
export default class DroppedFileService extends Service.extend(Evented) {
  sendDroppedFile(file) {
    console.log(file);
    this.trigger('fileWasDropped', file);
  }
}
