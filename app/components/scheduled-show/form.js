import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ScheduledShowForm extends Component {
  @tracked isSaving = false;
  recurringIntervals = [
    {
      value: 'not_recurring',
      name: 'None'
    },
    {
      value: 'day',
      name: 'Day'
    },
    {
      value: 'week',
      name: 'Week'
    },
    {
      value: 'month',
      name: 'Month'
    },
    {
      value: 'biweek',
      name: 'Bi-weekly'
    },
  ]

  @action
  setRecurringInterval(interval){
    this.args.changeset.set('recurringInterval', interval);
  }
}
