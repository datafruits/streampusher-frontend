import classic from 'ember-classic-decorator';
import { computed } from '@ember/object';
import Model, { belongsTo, attr } from '@ember-data/model';

@classic
export default class BlogPostImage extends Model {
  @belongsTo('blog-post-body')
  blogPostBody;

  @attr()
  imageFileName;

  @attr()
  cdnUrl;

  @attr()
  s3Url;

  @computed('imageFileName')
  get fileBasename() {
    return this.imageFileName.split('.')[0];
  }
}
