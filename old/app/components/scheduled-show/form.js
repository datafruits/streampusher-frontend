import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { debounce } from '@ember/runloop';
import RSVP from 'rsvp';
import moment from 'moment';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import ScheduledShowValidations from '../../validations/scheduled-show';

export default class ScheduledShowForm extends Component {
  @tracked isSaving = false;
  @tracked showingContentEditor = false;

  @service
  flashMessages;

  @service
  store;

  @service
  router;

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

  constructor() {
    super(...arguments);
    this.changeset = new Changeset(
      this.args.model,
      lookupValidator(ScheduledShowValidations),
      ScheduledShowValidations
    );
  }

  get formattedDay() {
    return moment(this.changeset.start).format('dddd MMMM Do YYYY');
  }

  @action
  toggleShowingContentEditor() {
    this.showingContentEditor = !this.showingContentEditor;
  }

  @action
  setRecurringInterval(interval) {
    this.changeset.set('recurringInterval', interval);
  }

  @action
  setPlaylist(playlist) {
    this.changeset.set('playlist', playlist);
  }

  @action
  setDefaultPlaylist() {
    let playlist = this.store.peekRecord('playlist', 3);
    this.changeset.set('playlist', playlist);
  }

  @action
  setStart(time) {
    let hours = time.split(':')[0];
    let minutes = time.split(':')[1];
    const oldDate = this.changeset.start;
    let newDate = new Date(
      oldDate.getFullYear(),
      oldDate.getMonth(),
      oldDate.getDate(),
      hours,
      minutes
    );
    this.changeset.set('start', newDate);
  }

  @action
  setEnd(time) {
    let hours = time.split(':')[0];
    let minutes = time.split(':')[1];
    const oldDate = this.changeset.end;
    let newDate = new Date(
      oldDate.getFullYear(),
      oldDate.getMonth(),
      oldDate.getDate(),
      hours,
      minutes
    );
    this.changeset.set('end', newDate);
  }

  @action
  setHosts(djs) {
    this.changeset.set('djs', djs);
  }

  @action
  save(event) {
    event.preventDefault();
    this.isSaving = true;
    let show = this.changeset;
    const onSuccess = () => {
      this.isSaving = false;
      this.flashMessages.success('Saved!');
      this.router.transitionTo('authenticated.schedule');
    };
    const onFail = (response) => {
      console.log('show save failed');
      console.log(response);
      this.flashMessages.danger("Couldn't save show!");
      this.isSaving = false;
    };
    show.save().then(onSuccess, onFail);
  }

  @action
  searchDjs(term) {
    return new RSVP.Promise((resolve, reject) => {
      debounce(this, this._performDjsSearch, term, resolve, reject, 600);
    });
  }

  _performDjsSearch(term, resolve, reject) {
    this.store
      .query('user', {
        search: {
          keyword: term,
        },
      })
      .then((users) => {
        return resolve(users);
      }, reject);
  }

  @action
  backToSchedule() {
    this.router.transitionTo('authenticated.schedule');
  }
}