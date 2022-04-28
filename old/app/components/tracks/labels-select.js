import classic from 'ember-classic-decorator';
import { inject as service } from '@ember/service';
import { get, action } from '@ember/object';
import Component from '@ember/component';

@classic
export default class TracksLabelsSelect extends Component {
  @service
  flashMessages;

  @service
  store;

  @action
  hideCreateOptionOnSameName(term) {
    let existingOption = this.labels.findBy('name', term);
    return !existingOption;
  }

  @action
  setSelectedLabels(labels) {
    this.set('track.labels', labels);
    let labelIds = labels.map((label) => {
      return label.get('id');
    });
    this.track.set('labelIds', labelIds);
  }

  @action
  createTag(name) {
    let store = this.store;
    let label = store.createRecord('label', { name: name });
    let onSuccess = (label) => {
      console.log('label saved!');
      this.get('track.labels').pushObject(label);
      this.get('track.labelIds').pushObject(label.get('id'));
    };
    let onFail = (response) => {
      this.set('error', 'Failed to save tag: ' + response.errors[0].detail);
      this.flashMessages.danger('Sorry, something went wrong!');
      console.log('label save failed');
    };
    label.save().then(onSuccess, onFail);
  }
}
