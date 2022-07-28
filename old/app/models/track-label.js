import Model, { belongsTo } from '@ember-data/model';

export default Model.extend({
  track: belongsTo('track'),
  label: belongsTo('label'),
});
