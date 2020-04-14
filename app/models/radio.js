import Model, { attr } from '@ember-data/model';

export default class Radio extends Model {
  @attr defaultPlaylistId;
  @attr name;
}
