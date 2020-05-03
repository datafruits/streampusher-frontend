import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { or } from '@ember/object/computed';
import QueryParams from 'ember-parachute';
import { tracked } from '@glimmer/tracking';
import classic from 'ember-classic-decorator';

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

@classic
export default class DjsController extends Controller.extend(DjQueryParams.Mixin) {
  // @or('queryParamsState.{page,query}.changed')
  // queryParamsChanged;

  //@computed('query', 'page')
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
