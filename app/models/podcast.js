import classic from 'ember-classic-decorator';
import Model, { attr, belongsTo } from '@ember-data/model';

@classic
export default class Podcast extends Model {
  @attr()
  name;

  @belongsTo('playlist')
  playlist;
}
