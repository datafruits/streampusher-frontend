import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForFindAll() {
    return `${this.urlPrefix()}/djs`;
  },
  urlForQueryRecord(query) {
    if (query.me) {
      delete query.me;
      return `${this._super(...arguments)}/current_user`;
    }

    return this._super(...arguments);
  }
});
