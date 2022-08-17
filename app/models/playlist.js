import classic from 'ember-classic-decorator';
import { sort } from '@ember/object/computed';
import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

@classic
export default class Playlist extends Model {
  @attr()
  name;

  @attr()
  createdBy;

  @hasMany('playlist-track', { async: false })
  playlistTracks;

  @attr()
  interpolatedPlaylistTrackIntervalCount;

  @attr()
  interpolatedPlaylistTrackPlayCount;

  @attr()
  interpolatedPlaylistId;

  @attr()
  interpolatedPlaylistEnabled;

  @belongsTo('playlist') interpolatedPlaylist;

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
