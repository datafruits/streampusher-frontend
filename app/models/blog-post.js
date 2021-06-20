import Model, { hasMany } from '@ember-data/model';
import { computed } from '@ember/object';

export default Model.extend({
  blogPostBodies: hasMany('blog-post-body'),
  title: computed('blogPostBodies.[]', function(){
    if(this.blogPostBodies.length){
      return this.blogPostBodies.firstObject.title;
    }else{
      return "";
    }
  })
});
