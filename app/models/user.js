import Model, { attr } from '@ember-data/model';
import { tracked } from '@glimmer/tracking';

export default class User extends Model {
  @attr username;
  @attr password;
  @attr email;
  @attr role;
  @attr timeZone;
  @attr bio;
  @attr profilePublish;

  @attr role;
  get isAdmin() {
    return this.role.includes('admin');
  }
}
