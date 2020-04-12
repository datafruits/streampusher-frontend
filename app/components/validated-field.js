import classic from 'ember-classic-decorator';
import { action } from '@ember/object';
import Component from '@ember/component';

@classic
export default class ValidatedField extends Component {
  @action
  validateProperty(changeset, property) {
    console.log('validating property');
    return changeset.validate(property);
  }
}
