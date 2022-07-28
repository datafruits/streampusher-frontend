import Model, { attr, belongsTo } from '@ember-data/model';

export default Model.extend({
  name: attr(),
  playlist: belongsTo('playlist'),
});
