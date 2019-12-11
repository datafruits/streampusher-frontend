import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  blogPostBodies: DS.hasMany('blog-post-body'),
});
