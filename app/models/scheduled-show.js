import Model, { attr, hasMany, belongsTo } from '@ember-data/model';
import moment from 'moment';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class ScheduledShow extends Model {
  @hasMany('track') tracks;
  @belongsTo('playlist') playlist;
  @belongsTo('user') host;
  @attr start;
  @attr end;
  @attr title;
  @attr('file') image;
  @attr imageFilename;
  @attr tweetContent;
  @attr description;
  @attr timezone;
  @attr recurringInterval;

  get formattedDate() {
    return moment(this.start).format();
  };

  get displayTitle() {
    return `${this.title} - ${this.formattedDate}`;
  };

  @alias('start') startsAt;
  @alias('end') endsAt;
};
