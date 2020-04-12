import classic from 'ember-classic-decorator';
import DS from 'ember-data';
const { Model } = DS;

@classic
export default class Recording extends Model {
  path;
}
