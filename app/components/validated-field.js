import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class ValidatedField extends Component {
  @action
  validateProperty(changeset, property) {
    console.log('validating property');
    return changeset.validate(property);
  }

  @action
  setProperty(event) {
    return this.args.changeset.set(this.args.property, event.target.value);
  }
}
