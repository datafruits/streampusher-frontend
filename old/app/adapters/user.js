import classic from 'ember-classic-decorator';
import ApplicationAdapter from './application';

@classic
export default class User extends ApplicationAdapter {
  urlForFindAll() {
    return `${this.urlPrefix()}/djs`;
  }

  urlForQueryRecord(query) {
    if (query.me) {
      delete query.me;
      return `${super.urlForQueryRecord(...arguments)}/current_user`;
    }

    return super.urlForQueryRecord(...arguments);
  }

  urlForQuery(query) {
    return `${this.urlPrefix()}/djs`;
  }

  urlForCreateRecord() {
    return `${this.urlPrefix()}/djs`;
  }

  urlForUpdateRecord(id, modelName, snapshot) {
    return `${this.urlPrefix()}/djs/${id}`;
  }

  urlForFindRecord(id, modelName, snapshot) {
    return `${this.urlPrefix()}/djs/${id}`;
  }
}
