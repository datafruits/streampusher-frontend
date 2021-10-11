import Model, { attr, hasMany } from '@ember-data/model';
import { sort } from '@ember/object/computed';

export default Model.extend({
  name: attr(),
  createdBy: attr(),
  playlistTracks: hasMany('playlist-track'),
  interpolatedPlaylistTrackIntervalCount: attr(),
  interpolatedPlaylistTrackPlayCount: attr(),
  interpolatedPlaylistId: attr(),
  interpolatedPlaylistEnabled: attr(),
  noCueOut: attr(),
  updatedAt: attr('date'),
  shuffle: attr(),

  positionDesc: ["position:asc"],
  sortedPlaylistTracks: sort('playlistTracks', 'positionDesc')
});
