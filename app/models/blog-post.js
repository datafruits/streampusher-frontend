import classic from 'ember-classic-decorator';
import { computed } from '@ember/object';
import Model, { hasMany } from '@ember-data/model';

@classic
export default class BlogPost extends Model {
  @hasMany('blog-post-body')
  blogPostBodies;

  @computed('blogPostBodies.[]', 'blogPostBodies.firstObject.title')
  get title() {
    if (this.blogPostBodies.length) {
      return this.blogPostBodies.firstObject.title;
    } else {
      return '';
    }
  }
}
