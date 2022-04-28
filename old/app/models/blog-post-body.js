import Model, { belongsTo, attr } from '@ember-data/model';

export default Model.extend({
  blogPost: belongsTo('blog-post'),
  title: attr(),
  body: attr(),
  language: attr(),
  published: attr(),
  publishedAt: attr(),
});
