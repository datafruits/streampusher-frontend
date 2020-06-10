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
  updateSearch(query) {
    console.log(`in updateSearch in controller: ${query}`);
    this.query = query;
    this.page = 1;
  }
}
