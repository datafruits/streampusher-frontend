import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DooHickyComponent extends Component {
  @tracked thingy = 'wat';

  @action
  doThingy() {
    this.thingy = 'dingy';
  }
}
