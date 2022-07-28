import TextField from '@ember/component/text-field';
import classic from 'ember-classic-decorator';

@classic
export default class ArtworkFileUpload extends TextField {
  type = 'file';
  file = null;

  change(e) {
    this.file.update(e.target.files[0]);
    this.set('filename', e.target.files[0].name);
  }
}
