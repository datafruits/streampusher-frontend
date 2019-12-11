import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  username: DS.attr(),
  email: DS.attr(),
  role: DS.attr(),
  timeZone: DS.attr(),
});
