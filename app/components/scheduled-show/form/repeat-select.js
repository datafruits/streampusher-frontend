import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ScheduledShowFormRepeatSelect extends Component {
  recurringIntervals = [
    {
      value: 'not_recurring',
      name: 'None',
    },
    {
      value: 'day',
      name: 'Day',
    },
    {
      value: 'week',
      name: 'Week',
    },
    {
      value: 'month',
      name: 'Month',
    },
    {
      value: 'biweek',
      name: 'Bi-weekly',
    },
  ];

  get selectedRecurringInterval() {
    return this.recurringIntervals.filter((interval) => {
      return interval.value === this.args.changeset.recurringInterval;
    })[0];
  }

  @action
  handleChange(selection, event) {
    this.args.changeset.set(this.args.fieldName, selection.value);
    this.args.changeset.validate(this.args.fieldName);
  }
}
