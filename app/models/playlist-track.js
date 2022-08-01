import classic from 'ember-classic-decorator';
import Model, { attr, belongsTo } from '@ember-data/model';

@classic
export default class PlaylistTrack extends Model {
  @attr()
  podcastPublishedDate;

  @attr()
  displayName;

  @attr()
  title;

  @attr()
  position;

  @belongsTo('playlist')
  playlist;

  @belongsTo('track', { async: false })
  track;

  @attr('date')
  updatedAt;

  @attr()
  formattedDuration;
}
