import Component from '@glimmer/component';
import { action } from '@ember/object';

interface ScheduledShowCalendarSelectArgs {
  changeset: any;
}

export default class ScheduledShowCalendarSelect extends Component<ScheduledShowCalendarSelectArgs> {
  @action
  setDate(event: any) {
    const date = event.target.value;
    const newDate = this.args.changeset.get('startAt');
    this.args.changeset.set('startAt', newDate);
  }
}
