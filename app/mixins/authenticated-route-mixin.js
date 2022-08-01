import Mixin from '@ember/object/mixin';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Mixin.create(AuthenticatedRouteMixin, {
  // routeAfterAuthentication: 'authenticated.dashboard',
  // routeIfAlreadyAuthenticated: 'authenticated.dashboard',
});
