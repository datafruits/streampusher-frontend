import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  defaultPlaylistId: DS.attr(),
  name: DS.attr()
});
