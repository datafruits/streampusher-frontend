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
    //this.args.changeset.set(file, e.target.files[0]);
    this.args.changeset.set(filename, e.target.files[0].name);
    //return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = (e) => {
      this.args.changeset.set(file, e.target.result);
      // this.set('isEmpty', false);
      // this.set('isDirty', true);
      // resolve();
    };
    //reader.onerror = reject;

    reader.readAsDataURL(this.file);
    //});
  }
}
