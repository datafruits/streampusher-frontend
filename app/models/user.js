import DS from 'ember-data';
const { Model } = DS;
import { computed } from '@ember/object';

export default Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  email: DS.attr(),
  role: DS.attr(),
  timeZone: DS.attr(),
  bio: DS.attr(),
  isAdmin: computed('role', function() {
    return this.role == 'admin';
  })
});
