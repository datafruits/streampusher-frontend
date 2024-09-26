import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

interface BroadcastingInfoArgs {}

export default class BroadcastingInfo extends Component<BroadcastingInfoArgs> {
  @service declare currentRadio: any;
}
