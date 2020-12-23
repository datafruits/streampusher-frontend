import Model, { belongsTo, attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default Model.extend({
  blogPostBody: belongsTo('blog-post-body'),
  imageFileName: attr(),
  cdnUrl: attr(),
  s3Url: attr(),
  fileBasename: computed('imageFileName', function(){
    return this.imageFileName.split('.')[0];
  })
});
