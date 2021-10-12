'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'streampusher-frontend',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    API_HOST: process.env.API_HOST

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-cli-mirage'] = {
      enabled: false
    };

    ENV.paperclip = {
      path: ":base/:attachment/:style/:basename?:updated_at",
      base: "https://s3.amazonaws.com/streampusherdev"
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.LOG_TRANSITIONS = true;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
    ENV['ember-cli-mirage'] = {
      enabled: true
    };
    ENV.paperclip = {
      path: ":base/:attachment/:style/:basename?:updated_at",
      base: "https://s3.amazonaws.com/streampushertest"
    };
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.paperclip = {
      path: ":base/:attachment/:style/:basename?:updated_at",
      base: "https://s3.amazonaws.com/streampusher"
    };
  }

  return ENV;
};
