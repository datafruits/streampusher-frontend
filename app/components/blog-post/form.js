import Component from '@ember/component';

export default Component.extend({
  title: '',
  body: '',
  actions: {
    save(){
      this.model.save().then((blogPost) => {
        console.log('saved blog post');
        const blogPostBody = this.store.createRecord('blogPostBody', {
          title: this.title,
          body: this.body,
        });
        blogPost.blogPostBodies.pushObject(blogPostBody);
        blogPostBody.save().then(() => {
          console.log('saved blog post body');
        }).catch((error) => {
          console.log(`error: ${error}`);
        });
      }).catch((error) => {
          console.log(`error: ${error}`);
      });
    }
  }
});
