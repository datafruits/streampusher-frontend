import DS from 'ember-data';
import { computed } from '@ember/object';
const { Model } = DS;

export default Model.extend({
  blogPostBodies: DS.hasMany('blog-post-body'),
  title: computed('blogPostBodies.[]', function(){
    if(this.blogPostBodies.length){
      return this.blogPostBodies.firstObject.title;
    }else{
      return "";
    }
  })
});
