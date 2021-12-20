import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { debounce } from "@ember/runloop";
import RSVP from "rsvp";
import moment from 'moment';

export default class ScheduledShowForm extends Component {
  @tracked isSaving = false;
  @tracked showingContentEditor = false;
  @service
  flashMessages;
  @service
  store;
  recurringIntervals = [
    {
      value: "not_recurring",
      name: "None",
    },
    {
      value: "day",
      name: "Day",
    },
    {
      value: "week",
      name: "Week",
    },
    {
      value: "month",
      name: "Month",
    },
    {
      value: "biweek",
      name: "Bi-weekly",
    },
  ];

  get formattedDay() {
    return moment(this.args.changeset.start).format('dddd MMMM Do YYYY');
  }

  @action
  toggleShowingContentEditor() {
    this.showingContentEditor = !this.showingContentEditor;
  }

  @action
  setRecurringInterval(interval) {
    this.args.changeset.set("recurringInterval", interval);
  }

  @action
  setPlaylist(playlist) {
    this.args.changeset.set("playlist", playlist);
  }

  @action
  setStart(time){
    let hours = time.split(':')[0];
    let minutes = time.split(':')[1];
    const oldDate = this.args.changeset.start;
    let newDate = new Date(oldDate.getFullYear(), oldDate.getMonth(), oldDate.getDate(), hours, minutes);
    this.args.changeset.set("start", newDate);
  }

  @action
  setEnd(time){
    let hours = time.split(':')[0];
    let minutes = time.split(':')[1];
    const oldDate = this.args.changeset.end;
    let newDate = new Date(oldDate.getFullYear(), oldDate.getMonth(), oldDate.getDate(), hours, minutes);
    this.args.changeset.set("end", newDate);
  }

  @action
  setHosts(djs){
    this.args.changeset.set('djs', djs);
  }

  @action
  save() {
    this.isSaving = true;
    let show = this.args.changeset;
    //let currentPlaylist = this.get('currentPlaylist.playlist');
    const onSuccess = () => {
      this.isSaving = false;
      this.flashMessages.success("Saved!");
      //this.transitionToRoute('playlists.show', currentPlaylist.id);
    };
    const onFail = () => {
      console.log("show save failed");
      this.flashMessages.danger("Something went wrong!");
      this.isSaving = false;
    };
    show.save().then(onSuccess, onFail);
  }

  @action
  searchDjs(term){
    return new RSVP.Promise((resolve, reject) => {
      debounce(this, this._performDjsSearch, term, resolve, reject, 600);
    });
  }
  _performDjsSearch(term, resolve, reject) {
    this.store.query("user", {
      search: {
        keyword: term
      }
    }).then((users) => {
      return resolve(users);
    }, reject);
  }
}
