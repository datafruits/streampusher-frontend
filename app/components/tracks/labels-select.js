import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class TracksLabelsSelect extends Component {
  @service
  flashMessages;

  @service
  store;

  @tracked error;

  @action
  hideCreateOptionOnSameName(term) {
    let existingOption = this.args.labels.findBy('name', term);
    return !existingOption;
  }

  @action
  setSelectedLabels(labels) {
    this.args.changeset.set('labels', labels);
    let labelIds = labels.map((label) => {
      return label.get('id');
    });
    this.args.changeset.set('labelIds', labelIds);
  }

  @action
  createTag(name) {
    let store = this.store;
    let label = store.createRecord('label', { name: name });
    let onSuccess = (label) => {
      console.log('label saved!');
      this.args.changeset.get('labels').pushObject(label);
      this.args.changeset.get('labelIds').pushObject(label.get('id'));
    };
    let onFail = (response) => {
      this.error = 'Failed to save tag: ' + response.errors[0].detail;
      this.flashMessages.danger('Sorry, something went wrong!');
      console.log('label save failed');
    };
    label.save().then(onSuccess, onFail);
  }
}
