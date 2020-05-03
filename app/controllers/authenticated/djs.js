import Controller from '@ember/controller';
import { action } from '@ember/object';
import QueryParams from 'ember-parachute';
import { tracked } from '@glimmer/tracking';

export const DjQueryParams = new QueryParams({
  page: {
    defaultValue: 1,
    refresh: true
  },
  query: {
    defaultValue: "",
    refresh: true
  }
});

export default class DjsController extends Controller.extend(DjQueryParams.Mixin) {
  @tracked query;
  @tracked page;
  get searchParams() {
    return { query: this.query, page: this.page };
  }

  @action
  save(dj) {
    dj.save().then(() => {
      console.log('in save');
      this.flashMessages.success('Saved user!');
      //this.clearForm();
    }).catch((error) => {
      this.flashMessages.danger("Couldn't save user!");
      console.log(error);
    });
  }

  @action
  updateSearch(query) {
    console.log(`in updateSearch in controller: ${query}`);
    this.query = query;
    this.page = 1;
  }
}
