import DS from 'ember-data';
import moment from 'moment';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default DS.Model.extend({
  tracks: DS.hasMany('track'),
  start: DS.attr(),
  end: DS.attr(),
  title: DS.attr(),
  imageFilename: DS.attr(),
  tweetContent: DS.attr(),
  description: DS.attr(),
  timezone: DS.attr(),
  recurringInterval: DS.attr(),

  formattedDate: computed('start', function(){
    return moment(this.start).format();
  }),
  displayTitle: computed('title', 'formattedDate', function(){
    return `${this.title} - ${this.formattedDate}`;
  }),
  startsAt: alias('start'),
  endsAt: alias('end'),
});
