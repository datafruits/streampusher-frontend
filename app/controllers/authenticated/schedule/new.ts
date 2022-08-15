import Controller from '@ember/controller';

export default class AuthenticatedScheduleNew extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  queryParams = ['date'];
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'authenticated/schedule/new': AuthenticatedScheduleNew;
  }
}
