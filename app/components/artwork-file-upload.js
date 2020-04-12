import classic from 'ember-classic-decorator';
import TextField from '@ember/component/text-field';

@classic
export default class ArtworkFileUpload extends TextField {
  type = 'file';
  file = null;

  change(e) {
    this.file.update(e.target.files[0]);
    this.set('filename', e.target.files[0].name)
  }
}
