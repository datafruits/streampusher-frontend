import DS from 'ember-data';
import { computed } from '@ember/object';
const { Model } = DS;

export default Model.extend({
  blogPostBody: DS.belongsTo('blog-post-body'),
  imageFileName: DS.attr(),
  cdnUrl: DS.attr(),
  s3Url: DS.attr(),
  fileBasename: computed('imageFileName', function(){
    return this.imageFileName.split('.')[0];
  })
});
