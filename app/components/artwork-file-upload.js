import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ArtworkFileUpload extends Component {
  @tracked file = null;

  @action
  change(e) {
    const file = this.args.file;
    const filename = this.args.filename;
    this.file = e.target.files[0];
    this.args.changeset.set(filename, e.target.files[0].name);
    let reader = new FileReader();

    reader.onload = (e) => {
      this.args.changeset.set(file, e.target.result);
    };
    reader.onerror = (e) => {
      console.log('error reading file');
      console.log(e);
    };

    reader.readAsDataURL(this.file);
  }
}
