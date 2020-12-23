import Model, { attr, belongsTo } from '@ember-data/model';

export default Model.extend({
  podcastPublishedDate: attr(),
  displayName: attr(),
  title: attr(),
  position: attr(),
  playlist: belongsTo('playlist'),
  track: belongsTo('track', { async: false }),
  updatedAt: attr('date'),
  formattedDuration: attr(),
});
