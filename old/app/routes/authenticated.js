import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from '../mixins/authenticated-route-mixin';

@classic
export default class AuthenticatedRoute extends Route.extend(
  AuthenticatedRouteMixin
) {}
