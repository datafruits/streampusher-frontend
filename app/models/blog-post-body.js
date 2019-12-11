import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  blogPost: DS.belongsTo('blog-post'),
  title: DS.attr(),
  body: DS.attr(),
  language: DS.attr()
});
