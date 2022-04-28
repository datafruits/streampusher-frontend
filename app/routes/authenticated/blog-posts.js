import Route from '@ember/routing/route';

export default class BlogPostsRoute extends Route {
  model() {
    return this.store.findAll('blog-post');
  }
}
