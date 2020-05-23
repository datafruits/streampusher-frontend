'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-font-awesome': {
     useScss: true, // for ember-cli-sass
    },

    postcssOptions: {
      compile: {
        extension: 'scss',
        enabled: true,
        parser: require('postcss-scss'),
        plugins: [
          {
            module: require('@csstools/postcss-sass'),
            options: {
              includePaths: [
                'node_modules/ember-power-select',
                'node_modules/ember-calendar',
                'node_modules/font-awesome/scss',
              ],
            },

          },
          require('tailwindcss')('./app/tailwind/config.js')
        ]
      }
    }


  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('vendor/netlify.toml', {
    destDir: '/',
  });

  return app.toTree();
};
