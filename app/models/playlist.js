import Model, { attr, hasMany } from '@ember-data/model';
import { sort } from '@ember/object/computed';
import { validator, buildValidations } from 'ember-cp-validations';
const Validations = buildValidations({
  name: validator('presence', { presence: true, message: "cannot be blank"}),
});


export default Model.extend(Validations, {
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
