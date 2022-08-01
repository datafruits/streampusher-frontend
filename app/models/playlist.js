import classic from 'ember-classic-decorator';
import { sort } from '@ember/object/computed';
import Model, { attr, hasMany } from '@ember-data/model';

@classic
export default class Playlist extends Model {
  @attr()
  name;

  @attr()
  createdBy;

  @hasMany('playlist-track')
  playlistTracks;

  @attr()
  interpolatedPlaylistTrackIntervalCount;

  @attr()
  interpolatedPlaylistTrackPlayCount;

  @attr()
  interpolatedPlaylistId;

  @attr()
  interpolatedPlaylistEnabled;

  @attr()
  noCueOut;

  @attr('date')
  updatedAt;

  @attr()
  shuffle;

  positionDesc = ['position:asc'];

  @sort('playlistTracks', 'positionDesc')
  sortedPlaylistTracks;
}
