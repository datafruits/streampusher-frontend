import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('setup');
  this.route('authenticated', { path: '' }, function() {
    this.route('dashboard');
    this.route('playlists', function() {
      this.route('show', {path: '/:id'});
    });
    this.route('schedule');
    this.route('djs', function() {
      this.route('show', {path: '/:id'});
    });
    this.route('podcasts', function() {
      this.route('show', {path: '/:id'});
    });
    this.route('vj');
    this.route('host-applications');
    this.route('recordings');

    this.route('profile');
    this.route('settings');
    this.route('radio-settings');
    this.route('admin');

    this.route('blog-posts');

    this.route('blog-posts.show', {path: '/blog-posts/:id'});
    this.route('blog-posts.new', {path: '/blog-posts/new'});
  });
});

export default Router;
