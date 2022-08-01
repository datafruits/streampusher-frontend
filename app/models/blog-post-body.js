import classic from 'ember-classic-decorator';
import Model, { belongsTo, attr } from '@ember-data/model';

@classic
export default class BlogPostBody extends Model {
  @belongsTo('blog-post')
  blogPost;

  @attr()
  title;

  @attr()
  body;

  @attr()
  language;

  @attr()
  published;

  @attr()
  publishedAt;
}
