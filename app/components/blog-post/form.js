import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  currentLocale: 'en',
  store: service(),
  init(){
    this._super(...arguments);
    this.locales = [
      {text: 'English', value: 'en'},
      {text: '日本語', value: 'ja'},
      {text: '한국어', value: 'kr'},
      {text: 'Español', value: 'es'}
    ];
    this.set('currentBody', this.model.blogPostBodies.filter( (body) => { return body.language === this.currentLocale }).firstObject);
    if(!this.currentBody){
      this.model.save().then((blogPost) => {
        this.set('currentBody', this.store.createRecord('blogPostBody', {
          language: this.currentLocale
        }));
        blogPost.blogPostBodies.pushObject(this.currentBody);
      });
    }
  },
  actions: {
    setLocale(locale){
      this.set('currentLocale', locale);
      this.set('currentBody',
        this.model.blogPostBodies.filter( (body) => {
          return body.language === this.currentLocale
        }).firstObject);
      if(!this.currentBody){
        this.model.save().then((blogPost) => {
          this.set('currentBody', this.store.createRecord('blogPostBody', {
            language: locale
          }));
          blogPost.blogPostBodies.pushObject(this.currentBody);
        });
      }
    },
    save(){
      this.currentBody.save().then(() => {
        console.log('saved blog post body');
      }).catch((error) => {
        console.log(`error: ${error}`);
      });
    },
    insertImageMarkdown(image){
      const imageMarkdown = `![${image.fileBasename}](${image.s3Url})`;
      let textArea = this.element.querySelector("textarea");
      const currentPosition = textArea.selectionStart;

      const start = textArea.value.substr(0, currentPosition);
      const end = textArea.value.substr(currentPosition);
      textArea.value = start + imageMarkdown + end;
    }
  }
});
