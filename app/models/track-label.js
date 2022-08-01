import classic from 'ember-classic-decorator';
import Model, { belongsTo } from '@ember-data/model';

@classic
export default class TrackLabel extends Model {
  @belongsTo('track')
  track;

  @belongsTo('label')
  label;
}
