import Model, { attr } from '@ember-data/model';

export default class Recording extends Model {
  @attr path;
}
