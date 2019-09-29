import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('authenticated', { path: '' }, function() {
    this.route('dashboard');
    this.route('playlists', function() {
      this.route('show', {path: '/:id'});
    });
    this.route('schedule');
    this.route('djs');
    this.route('podcasts');
  });
});

export default Router;
