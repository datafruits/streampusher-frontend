import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';

@classic
export default class BlogPostsRoute extends Route {
  model() {
    return this.store.findAll('blog-post');
  }
}
