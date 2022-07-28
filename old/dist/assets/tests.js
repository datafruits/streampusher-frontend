'use strict';

define("streampusher-frontend/tests/acceptance/admin-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | admin', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /admin', async function (assert) {
      await (0, _testHelpers.visit)('/admin');
      assert.equal((0, _testHelpers.currentURL)(), '/admin');
    });
  });
});
define("streampusher-frontend/tests/acceptance/blog-posts-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | blog posts', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('creating a new post', async function (assert) {
      await (0, _testHelpers.visit)('/blog-posts');
      await (0, _testHelpers.click)('New'); //fill in title
      //fill in body

      assert.equal((0, _testHelpers.currentURL)(), '/blog-posts');
    });
    (0, _qunit.test)('editing a post', async function (assert) {});
  });
});
define("streampusher-frontend/tests/acceptance/dashboard-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | dashboard', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /dashboard', async function (assert) {
      await (0, _testHelpers.visit)('/dashboard');
      assert.equal((0, _testHelpers.currentURL)(), '/dashboard');
    });
  });
});
define("streampusher-frontend/tests/acceptance/djs-test", ["qunit", "@ember/test-helpers", "ember-qunit", "ember-simple-auth/test-support", "ember-cli-mirage/test-support"], function (_qunit, _testHelpers, _emberQunit, _testSupport, _testSupport2) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit",0,"ember-simple-auth/test-support",0,"ember-cli-mirage/test-support"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | djs', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _testSupport2.setupMirage)(hooks);
    (0, _qunit.test)('visiting /djs', async function (assert) {
      await (0, _testSupport.authenticateSession)();
      console.log('authenticated?');
      await (0, _testHelpers.visit)('/djs');
      console.log('visited djs');
      assert.equal((0, _testHelpers.currentURL)(), '/djs');
    });
    (0, _qunit.test)('search djs by username', async function (assert) {
      await (0, _testSupport.authenticateSession)();
      await (0, _testHelpers.visit)('/djs');
      await (0, _testHelpers.fillIn)('input#username', 'djnameko');
      await (0, _testHelpers.fillIn)('input#email', 'dj.nameko@datafruits.fm');
      await (0, _testHelpers.click)('[data-test-submit-button]');
      assert.true(document.querySelector('.flash-message.alert-success').textContent.includes('Saved user!'));
      await (0, _testHelpers.fillIn)('input#username', 'cheese monster');
      await (0, _testHelpers.fillIn)('input#email', 'cheese@datafruits.fm');
      await (0, _testHelpers.click)('[data-test-submit-button]');
      assert.true(document.querySelector('.flash-message.alert-success').textContent.includes('Saved user!'));
      await (0, _testHelpers.fillIn)('[data-test-djs-search]', 'doesnt exist');
      await (0, _testHelpers.triggerKeyEvent)('[data-test-djs-search]', 'keyup', 'Up');
      assert.true(document.querySelector('[data-test-djs-table] tbody').textContent.includes('No result'));
      await (0, _testHelpers.fillIn)('[data-test-djs-search]', 'cheese');
      await (0, _testHelpers.triggerKeyEvent)('[data-test-djs-search]', 'keyup', 'Up');
      assert.true(document.querySelector('[data-test-djs-table] tbody tr td').textContent.includes('cheese monster'));
    });
    (0, _qunit.test)('add new dj', async function (assert) {
      await (0, _testSupport.authenticateSession)();
      await (0, _testHelpers.visit)('/djs');
      await (0, _testHelpers.fillIn)('input#username', 'djnameko');
      await (0, _testHelpers.fillIn)('input#email', 'dj.nameko@datafruits.fm');
      await (0, _testHelpers.click)('[data-test-submit-button]');
      assert.true(document.querySelector('.flash-message.alert-success').textContent.includes('Saved user!'));
    });
    (0, _qunit.test)('edit dj', async function (assert) {
      await (0, _testSupport.authenticateSession)();
      await (0, _testHelpers.visit)('/djs');
      await (0, _testHelpers.fillIn)('input#username', 'djnameko');
      await (0, _testHelpers.fillIn)('input#email', 'dj.nameko@datafruits.fm');
      await (0, _testHelpers.click)('[data-test-submit-button]');
      assert.true(document.querySelector('.flash-message.alert-success').textContent.includes('Saved user!'));
      await (0, _testHelpers.click)('[data-test-edit-link]');
      assert.equal((0, _testHelpers.currentURL)(), `/djs/1`);
      await (0, _testHelpers.fillIn)('input#username', 'djnameko2');
      await (0, _testHelpers.fillIn)('input#email', 'dj.nameko33@datafruits.fm');
      await (0, _testHelpers.click)('[data-test-submit-button]');
      assert.true(document.querySelectorAll('.flash-message.alert-success')[1].textContent.includes('Updated user!'));
      assert.equal((0, _testHelpers.currentURL)(), '/djs');
    });
  });
});
define("streampusher-frontend/tests/acceptance/host-applications-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | host applications', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /host-applications', async function (assert) {
      await (0, _testHelpers.visit)('/host-applications');
      assert.equal((0, _testHelpers.currentURL)(), '/host-applications');
    });
  });
});
define("streampusher-frontend/tests/acceptance/login-test", ["qunit", "@ember/test-helpers", "ember-qunit", "ember-cli-mirage/test-support"], function (_qunit, _testHelpers, _emberQunit, _testSupport) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit",0,"ember-cli-mirage/test-support"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | login', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _testSupport.setupMirage)(hooks);
    (0, _qunit.test)('logging in', async function (assert) {
      this.server.post('/users/sign_in', () => {
        return {
          success: 'true',
          login: 'datafruits',
          token: 'hotdog$'
        };
      });
      await (0, _testHelpers.visit)('/login');
      await (0, _testHelpers.fillIn)('input#login', 'info@datafruits.fm');
      await (0, _testHelpers.fillIn)('input#password', 'password');
      await (0, _testHelpers.click)('[data-test-submit-button]');
      assert.true(document.querySelector('.flash-message.alert-success').textContent.includes('Logged in!'));
      assert.equal((0, _testHelpers.currentURL)(), '/dashboard');
    });
  });
});
define("streampusher-frontend/tests/acceptance/playlists-test", ["qunit", "@ember/test-helpers", "ember-qunit", "ember-simple-auth/test-support", "ember-cli-mirage/test-support", "ember-file-upload/test-support"], function (_qunit, _testHelpers, _emberQunit, _testSupport, _testSupport2, _testSupport3) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit",0,"ember-simple-auth/test-support",0,"ember-cli-mirage/test-support",0,"ember-file-upload/test-support"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | playlists', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _testSupport2.setupMirage)(hooks);
    (0, _qunit.test)('visiting /playlists', async function (assert) {
      await (0, _testSupport.authenticateSession)();
      await (0, _testHelpers.visit)('/playlists');
      assert.equal((0, _testHelpers.currentURL)(), '/playlists');
    });
    (0, _qunit.test)('create a new playlist', async function (assert) {
      await (0, _testSupport.authenticateSession)();
      await (0, _testHelpers.visit)('/playlists/');
      await (0, _testHelpers.click)('[data-test-new-playlist-button]');
      assert.equal((0, _testHelpers.currentURL)(), '/playlists/new?tracksPage=1');
      await (0, _testHelpers.fillIn)('input#name', 'my new playlist');
      await (0, _testHelpers.click)('[data-test-save-playlist-button]');
      assert.dom('.flash-message.alert-success').hasText('Created playlist!');
    });
    (0, _qunit.test)('uploading a new track', async function (assert) {
      await (0, _testSupport.authenticateSession)();
      await (0, _testHelpers.visit)('/playlists/'); // Multiple files

      const file1 = new File([], 'dingus1.txt'); //const file2 = new File([], 'dingus2.txt');

      await (0, _testSupport3.selectFiles)('.file-upload input', file1);
      assert.dom('.flash-message.alert-success').hasText('Uploaded track!');
    });
    (0, _qunit.test)('add track to playlist', async function (assert) {});
    (0, _qunit.test)('editing a track', async function (assert) {// set artwork
      // set scheduled show
    });
    (0, _qunit.test)('edit playlist settings', async function (assert) {});
    (0, _qunit.test)('navigate to a different playlist', async function (assert) {});
    (0, _qunit.test)('reordering tracks', async function (assert) {}); //delete playlist
  });
});
define("streampusher-frontend/tests/acceptance/podcasts-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | podcasts', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /podcasts', async function (assert) {
      await (0, _testHelpers.visit)('/podcasts');
      assert.equal((0, _testHelpers.currentURL)(), '/podcasts');
    });
    (0, _qunit.test)('creating a podcast', async function (assert) {});
    (0, _qunit.test)('editing a podcast', async function (assert) {});
  });
});
define("streampusher-frontend/tests/acceptance/profile-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | profile', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('editing your profile', async function (assert) {
      await (0, _testHelpers.visit)('/profile');
      assert.equal((0, _testHelpers.currentURL)(), '/profile');
    });
  });
});
define("streampusher-frontend/tests/acceptance/radio-settings-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | radio settings', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('editing radio settings', async function (assert) {
      await (0, _testHelpers.visit)('/radio-settings');
      assert.equal((0, _testHelpers.currentURL)(), '/radio-settings');
    });
  });
});
define("streampusher-frontend/tests/acceptance/recordings-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | recordings', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('publishing a recording', async function (assert) {
      await (0, _testHelpers.visit)('/recordings');
      assert.equal((0, _testHelpers.currentURL)(), '/recordings');
    });
  });
});
define("streampusher-frontend/tests/acceptance/schedule-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | schedule', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('scheduling a new show', async function (assert) {
      await (0, _testHelpers.visit)('/schedule/new');
      assert.equal((0, _testHelpers.currentURL)(), '/schedule/new');
    });
    (0, _qunit.test)('editing scheduled show', async function (assert) {});
  });
});
define("streampusher-frontend/tests/acceptance/settings-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | settings', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /settings', async function (assert) {
      await (0, _testHelpers.visit)('/settings');
      assert.equal((0, _testHelpers.currentURL)(), '/settings');
    });
  });
});
define("streampusher-frontend/tests/acceptance/setup-radio-test", ["qunit", "@ember/test-helpers", "ember-qunit", "ember-cli-mirage/test-support"], function (_qunit, _testHelpers, _emberQunit, _testSupport) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit",0,"ember-cli-mirage/test-support"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | setup radio', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _testSupport.setupMirage)(hooks);
    (0, _qunit.test)('creating radio', async function (assert) {
      this.server.post('/setup.json', () => {
        return {
          user: {
            id: 1,
            username: 'datafruits',
            social_identities: []
          }
        };
      });
      this.server.get('/setup/allowed.json', () => {
        return 'ok';
      });
      await (0, _testHelpers.visit)('/setup');
      assert.equal((0, _testHelpers.currentURL)(), '/setup');
      await (0, _testHelpers.fillIn)('input#email', 'info@datafruits.fm');
      await (0, _testHelpers.fillIn)('input#radio-name', 'datafruits');
      await (0, _testHelpers.fillIn)('input#password', 'password');
      await (0, _testHelpers.click)('[data-test-submit-button]');
      assert.dom(document.querySelector('.flash-message.alert-success')).hasText('Signing you in');
      assert.equal((0, _testHelpers.currentURL)(), '/dashboard');
    });
    (0, _qunit.test)('it redirects if radio is already setup', async function (assert) {});
  });
});
define("streampusher-frontend/tests/acceptance/vj-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | vj', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('turning vj on and off', async function (assert) {
      await (0, _testHelpers.visit)('/vj');
      assert.equal((0, _testHelpers.currentURL)(), '/vj');
    });
  });
});
define("streampusher-frontend/tests/helpers/ember-power-select", ["exports", "@ember/debug", "ember-power-select/test-support/helpers"], function (_exports, _debug, _helpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.clickTrigger = void 0;
  _exports.default = deprecatedRegisterHelpers;
  _exports.typeInSearch = _exports.triggerKeydown = _exports.touchTrigger = _exports.selectChoose = _exports.nativeTouch = _exports.nativeMouseUp = _exports.nativeMouseDown = _exports.findContains = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"ember-power-select/test-support/helpers",0,"ember-power-select/test-support/helpers"eaimeta@70e063a35619d71f

  function deprecateHelper(fn, name) {
    return function () {
      (true && !(false) && (0, _debug.deprecate)(`DEPRECATED \`import { ${name} } from '../../tests/helpers/ember-power-select';\` is deprecated. Please, replace it with \`import { ${name} } from 'ember-power-select/test-support/helpers';\``, false, {
        until: '1.11.0',
        id: `ember-power-select-test-support-${name}`
      }));
      return fn(...arguments);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  _exports.findContains = findContains;
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  _exports.nativeMouseDown = nativeMouseDown;
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  _exports.nativeMouseUp = nativeMouseUp;
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  _exports.triggerKeydown = triggerKeydown;
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  _exports.typeInSearch = typeInSearch;
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  _exports.clickTrigger = clickTrigger;
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  _exports.nativeTouch = nativeTouch;
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  _exports.touchTrigger = touchTrigger;
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');
  _exports.selectChoose = selectChoose;

  function deprecatedRegisterHelpers() {
    (true && !(false) && (0, _debug.deprecate)("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, {
      until: '1.11.0',
      id: 'ember-power-select-test-support-register-helpers'
    }));
    return (0, _helpers.default)();
  }
});
define("streampusher-frontend/tests/helpers/flash-message", ["ember-cli-flash/flash/object"], function (_object) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-flash/flash/object"eaimeta@70e063a35619d71f

  _object.default.reopen({
    init() {}

  });
});
define("streampusher-frontend/tests/integration/components/blog-post/form-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | blog-post/form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <BlogPost::Form />
      */
      {
        "id": "ntepVYLk",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"blog-post/form\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <BlogPost::Form>
              template block text
            </BlogPost::Form>
          
      */
      {
        "id": "+aFQcQn4",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"blog-post/form\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/clock-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | clock', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Clock />
      */
      {
        "id": "EppW/Zvz",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"clock\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Clock>
              template block text
            </Clock>
          
      */
      {
        "id": "hqxvSCXv",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"clock\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/djs/form-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | djs/form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Djs::Form />
      */
      {
        "id": "FV+FkvTt",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"djs/form\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Djs::Form>
              template block text
            </Djs::Form>
          
      */
      {
        "id": "394Oyohp",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"djs/form\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/djs/table-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | djs/table', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Djs::Table />
      */
      {
        "id": "ATjrNT6A",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"djs/table\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Djs::Table>
              template block text
            </Djs::Table>
          
      */
      {
        "id": "vJEaxuhb",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"djs/table\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/donation-link-form-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | donation-link-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DonationLinkForm />
      */
      {
        "id": "XzULKH85",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"donation-link-form\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DonationLinkForm>
              template block text
            </DonationLinkForm>
          
      */
      {
        "id": "LXsfCJbX",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"donation-link-form\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/doo-hicky-test", [], function () {
  "use strict";

  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
});
define("streampusher-frontend/tests/integration/components/file-uploader-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | file-uploader', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <FileUploader />
      */
      {
        "id": "GiPuSmYi",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"file-uploader\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <FileUploader>
              template block text
            </FileUploader>
          
      */
      {
        "id": "PapcjBBN",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"file-uploader\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/host-applications/table-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | host-applications/table', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <HostApplications::Table />
      */
      {
        "id": "TtGm78gx",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"host-applications/table\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <HostApplications::Table>
              template block text
            </HostApplications::Table>
          
      */
      {
        "id": "9J1Ruokc",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"host-applications/table\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/host-applications/vote-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | host-applications/vote', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <HostApplications::Vote />
      */
      {
        "id": "LjEW/A1S",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"host-applications/vote\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <HostApplications::Vote>
              template block text
            </HostApplications::Vote>
          
      */
      {
        "id": "307+/Pbz",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"host-applications/vote\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/metadata-update-form-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | metadata-update-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <MetadataUpdateForm />
      */
      {
        "id": "NHbrn9wM",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"metadata-update-form\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <MetadataUpdateForm>
              template block text
            </MetadataUpdateForm>
          
      */
      {
        "id": "sN48bxLc",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"metadata-update-form\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/pagination-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | pagination', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Pagination />
      */
      {
        "id": "sx1sXc3t",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"pagination\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Pagination>
              template block text
            </Pagination>
          
      */
      {
        "id": "M5VT9mva",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"pagination\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/playlists/form-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | playlists/form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Playlists::Form />
      */
      {
        "id": "nCbxNB6Z",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"playlists/form\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Playlists::Form>
              template block text
            </Playlists::Form>
          
      */
      {
        "id": "6W1UCI9u",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"playlists/form\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/playlists/playlist-selector-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | playlists/playlist-selector', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Playlists::PlaylistSelector />
      */
      {
        "id": "AlVfOA/K",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"playlists/playlist-selector\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Playlists::PlaylistSelector>
              template block text
            </Playlists::PlaylistSelector>
          
      */
      {
        "id": "ZKD3TulU",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"playlists/playlist-selector\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/playlists/playlists-list-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | playlists/playlists-list', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Playlists::PlaylistsList />
      */
      {
        "id": "4PxLmXKw",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"playlists/playlists-list\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Playlists::PlaylistsList>
              template block text
            </Playlists::PlaylistsList>
          
      */
      {
        "id": "x6/cf3iE",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"playlists/playlists-list\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/playlists/search-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | playlists/search', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Playlists::Search />
      */
      {
        "id": "mF/02pr3",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"playlists/search\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Playlists::Search>
              template block text
            </Playlists::Search>
          
      */
      {
        "id": "hFvAkWY2",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"playlists/search\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/playlists/select-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | playlists/select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Playlists::Select />
      */
      {
        "id": "7vUxnWMa",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"playlists/select\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Playlists::Select>
              template block text
            </Playlists::Select>
          
      */
      {
        "id": "rTF89zZy",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"playlists/select\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/playlists/settings-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | playlists/settings', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Playlists::Settings />
      */
      {
        "id": "crvWRtkG",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"playlists/settings\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Playlists::Settings>
              template block text
            </Playlists::Settings>
          
      */
      {
        "id": "uT4W8eDb",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"playlists/settings\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/podcasts/form-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | podcasts/form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Podcasts::Form />
      */
      {
        "id": "Au3sbmNa",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"podcasts/form\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Podcasts::Form>
              template block text
            </Podcasts::Form>
          
      */
      {
        "id": "7Cb2GsiV",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"podcasts/form\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/recordings/table-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | recordings/table', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Recordings::Table />
      */
      {
        "id": "zUGlqAF1",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"recordings/table\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Recordings::Table>
              template block text
            </Recordings::Table>
          
      */
      {
        "id": "SQROuPWD",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"recordings/table\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/scheduled-show/content-editor-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | scheduled-show/content-editor', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ScheduledShow::ContentEditor />
      */
      {
        "id": "sd7fCCv7",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"scheduled-show/content-editor\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ScheduledShow::ContentEditor>
              template block text
            </ScheduledShow::ContentEditor>
          
      */
      {
        "id": "NtFqjgg5",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"scheduled-show/content-editor\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/scheduled-show/form-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | scheduled-show/form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ScheduledShow::Form />
      */
      {
        "id": "Bd90Ot+s",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"scheduled-show/form\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ScheduledShow::Form>
              template block text
            </ScheduledShow::Form>
          
      */
      {
        "id": "0o5uBAbi",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"scheduled-show/form\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/scheduled-show/playlist-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | scheduled-show/playlist', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ScheduledShow::Playlist />
      */
      {
        "id": "RfGZk48h",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"scheduled-show/playlist\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ScheduledShow::Playlist>
              template block text
            </ScheduledShow::Playlist>
          
      */
      {
        "id": "Q+k0V4u0",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"scheduled-show/playlist\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/side-navbar-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | side-navbar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <SideNavbar />
      */
      {
        "id": "atME8SXp",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"side-navbar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <SideNavbar>
              template block text
            </SideNavbar>
          
      */
      {
        "id": "439o+Pog",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"side-navbar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/time-picker-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | time-picker', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <TimePicker />
      */
      {
        "id": "+mKCQDqP",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"time-picker\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <TimePicker>
              template block text
            </TimePicker>
          
      */
      {
        "id": "MDL+qbVt",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"time-picker\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/timetable-calendar-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | timetable-calendar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <TimetableCalendar />
      */
      {
        "id": "w1m1tI2q",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"timetable-calendar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <TimetableCalendar>
              template block text
            </TimetableCalendar>
          
      */
      {
        "id": "qSJvTNjP",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"timetable-calendar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/timetable-loader-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | timetable-loader', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <TimetableLoader />
      */
      {
        "id": "dmiMDh20",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"timetable-loader\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <TimetableLoader>
              template block text
            </TimetableLoader>
          
      */
      {
        "id": "mtiQiRSg",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"timetable-loader\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/top-navbar-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | top-navbar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <TopNavbar />
      */
      {
        "id": "pVXcVhPE",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"top-navbar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <TopNavbar>
              template block text
            </TopNavbar>
          
      */
      {
        "id": "09FF4g0u",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"top-navbar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/tracks/search-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | tracks/search', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Tracks::Search />
      */
      {
        "id": "bjhyRE9v",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"tracks/search\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Tracks::Search>
              template block text
            </Tracks::Search>
          
      */
      {
        "id": "bQSREjbY",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"tracks/search\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/ui/field-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | ui/field', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Ui::Field />
      */
      {
        "id": "uSu0WQ8K",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"ui/field\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Ui::Field>
              template block text
            </Ui::Field>
          
      */
      {
        "id": "P0kf51rr",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"ui/field\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/ui/form-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | ui/form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Ui::Form />
      */
      {
        "id": "DKzF1dsl",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"ui/form\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Ui::Form>
              template block text
            </Ui::Form>
          
      */
      {
        "id": "UKzp/eu8",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"ui/form\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/user-menu-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | user-menu', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <UserMenu />
      */
      {
        "id": "EqcBf5S4",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"user-menu\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <UserMenu>
              template block text
            </UserMenu>
          
      */
      {
        "id": "F2NB0KHL",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"user-menu\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/components/validated-field-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | validated-field', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ValidatedField />
      */
      {
        "id": "sJrvMECO",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"validated-field\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ValidatedField>
              template block text
            </ValidatedField>
          
      */
      {
        "id": "Sw9pAA/E",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"validated-field\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("streampusher-frontend/tests/integration/helpers/eq-number-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Helper | eq-number', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        {{eq-number inputValue}}
      */
      {
        "id": "tXV1Wcc9",
        "block": "[[[1,[28,[35,0],[[33,1]],null]]],[],false,[\"eq-number\",\"inputValue\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('1234');
    });
  });
});
define("streampusher-frontend/tests/integration/helpers/pagination-query-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Helper | pagination-query', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        {{pagination-query inputValue}}
      */
      {
        "id": "iDV2nCPE",
        "block": "[[[1,[28,[35,0],[[33,1]],null]]],[],false,[\"pagination-query\",\"inputValue\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('1234');
    });
  });
});
define("streampusher-frontend/tests/integration/helpers/start-case-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Helper | start-case', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        {{start-case inputValue}}
      */
      {
        "id": "PB7FhVwD",
        "block": "[[[1,[28,[35,0],[[33,1]],null]]],[],false,[\"start-case\",\"inputValue\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('1234');
    });
  });
});
define("streampusher-frontend/tests/test-helper", ["streampusher-frontend/app", "streampusher-frontend/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit", "streampusher-frontend/tests/helpers/flash-message"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit, _flashMessage) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"streampusher-frontend/app",0,"streampusher-frontend/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit",0,"streampusher-frontend/tests/helpers/flash-message"eaimeta@70e063a35619d71f

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("streampusher-frontend/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("streampusher-frontend/tests/unit/adapters/blog-post-body-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Adapter | blog post body', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:blog-post-body');
      assert.ok(adapter);
    });
  });
});
define("streampusher-frontend/tests/unit/adapters/scheduled-show-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Adapter | scheduled show', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:scheduled-show');
      assert.ok(adapter);
    });
  });
});
define("streampusher-frontend/tests/unit/adapters/user-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Adapter | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:user');
      assert.ok(adapter);
    });
  });
});
define("streampusher-frontend/tests/unit/controllers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define("streampusher-frontend/tests/unit/controllers/authenticated/chat-moderation-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Controller | authenticated/chat-moderation', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:authenticated/chat-moderation');
      assert.ok(controller);
    });
  });
});
define("streampusher-frontend/tests/unit/controllers/authenticated/djs-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Controller | authenticated/djs', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:authenticated/djs');
      assert.ok(controller);
    });
  });
});
define("streampusher-frontend/tests/unit/controllers/authenticated/djs/show-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Controller | authenticated/djs/show', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:authenticated/djs/show');
      assert.ok(controller);
    });
  });
});
define("streampusher-frontend/tests/unit/controllers/authenticated/playlists/new-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Controller | authenticated/playlists/new', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:authenticated/playlists/new');
      assert.ok(controller);
    });
  });
});
define("streampusher-frontend/tests/unit/controllers/authenticated/show-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Controller | authenticated/show', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:authenticated/show');
      assert.ok(controller);
    });
  });
});
define("streampusher-frontend/tests/unit/controllers/login-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Controller | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:login');
      assert.ok(controller);
    });
  });
});
define("streampusher-frontend/tests/unit/controllers/password-reset-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Controller | password-reset', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:password-reset');
      assert.ok(controller);
    });
  });
});
define("streampusher-frontend/tests/unit/mixins/authenticated-route-mixin-test", ["@ember/object", "streampusher-frontend/mixins/authenticated-route-mixin", "qunit"], function (_object, _authenticatedRouteMixin, _qunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@ember/object",0,"streampusher-frontend/mixins/authenticated-route-mixin",0,"qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Mixin | authenticated-route-mixin', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      let AuthenticatedRouteMixinObject = _object.default.extend(_authenticatedRouteMixin.default);

      let subject = AuthenticatedRouteMixinObject.create();
      assert.ok(subject);
    });
  });
});
define("streampusher-frontend/tests/unit/models/blog-post-body-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Model | blog post body', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('blog-post-body', {});
      assert.ok(model);
    });
  });
});
define("streampusher-frontend/tests/unit/models/blog-post-image-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Model | blog post image', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('blog-post-image', {});
      assert.ok(model);
    });
  });
});
define("streampusher-frontend/tests/unit/models/blog-post-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Model | blog post', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('blog-post', {});
      assert.ok(model);
    });
  });
});
define("streampusher-frontend/tests/unit/models/host-application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Model | host application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('host-application', {});
      assert.ok(model);
    });
  });
});
define("streampusher-frontend/tests/unit/models/podcast-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Model | podcast', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('podcast', {});
      assert.ok(model);
    });
  });
});
define("streampusher-frontend/tests/unit/models/radio-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Model | radio', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('radio', {});
      assert.ok(model);
    });
  });
});
define("streampusher-frontend/tests/unit/models/recording-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Model | recording', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('recording', {});
      assert.ok(model);
    });
  });
});
define("streampusher-frontend/tests/unit/models/user-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Model | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('user', {});
      assert.ok(model);
    });
  });
});
define("streampusher-frontend/tests/unit/routes/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define("streampusher-frontend/tests/unit/routes/authenticated-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | authenticated', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:authenticated');
      assert.ok(route);
    });
  });
});
define("streampusher-frontend/tests/unit/routes/authenticated.recordings-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | authenticated.recordings', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:authenticated.recordings');
      assert.ok(route);
    });
  });
});
define("streampusher-frontend/tests/unit/routes/authenticated/djs/show-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | authenticated/djs/show', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:authenticated/djs/show');
      assert.ok(route);
    });
  });
});
define("streampusher-frontend/tests/unit/routes/authenticated/host-applications-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | authenticated/host-applications', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:authenticated/host-applications');
      assert.ok(route);
    });
  });
});
define("streampusher-frontend/tests/unit/routes/authenticated/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | authenticated/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:authenticated/index');
      assert.ok(route);
    });
  });
});
define("streampusher-frontend/tests/unit/routes/authenticated/podcasts-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | authenticated/podcasts', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:authenticated/podcasts');
      assert.ok(route);
    });
  });
});
define("streampusher-frontend/tests/unit/routes/authenticated/schedule-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | authenticated/schedule', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:authenticated/schedule');
      assert.ok(route);
    });
  });
});
define("streampusher-frontend/tests/unit/routes/authenticated/schedule/new-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | authenticated/schedule/new', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:authenticated/schedule/new');
      assert.ok(route);
    });
  });
});
define("streampusher-frontend/tests/unit/routes/authenticated/show-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | authenticated/show', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:authenticated/show');
      assert.ok(route);
    });
  });
});
define("streampusher-frontend/tests/unit/routes/authenticated/tracks/show-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | authenticated/tracks/show', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:authenticated/tracks/show');
      assert.ok(route);
    });
  });
});
define("streampusher-frontend/tests/unit/routes/dashboard-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | dashboard', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:dashboard');
      assert.ok(route);
    });
  });
});
define("streampusher-frontend/tests/unit/routes/login-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:login');
      assert.ok(route);
    });
  });
});
define("streampusher-frontend/tests/unit/routes/password-reset-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | password-reset', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:password-reset');
      assert.ok(route);
    });
  });
});
define("streampusher-frontend/tests/unit/routes/playlists-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | playlists', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:playlists');
      assert.ok(route);
    });
  });
});
define("streampusher-frontend/tests/unit/routes/playlists/show-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | playlists/show', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:playlists/show');
      assert.ok(route);
    });
  });
});
define("streampusher-frontend/tests/unit/routes/setup-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | setup', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:setup');
      assert.ok(route);
    });
  });
});
define("streampusher-frontend/tests/unit/serializers/user-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Serializer | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('user');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('user', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("streampusher-frontend/tests/unit/services/current-radio-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Service | current-radio', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:current-radio');
      assert.ok(service);
    });
  });
});
define("streampusher-frontend/tests/unit/services/current-user-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Service | current-user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:current-user');
      assert.ok(service);
    });
  });
});
define("streampusher-frontend/tests/unit/services/event-bus-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Service | event-bus', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:event-bus');
      assert.ok(service);
    });
  });
});
define("streampusher-frontend/tests/unit/services/metadata-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Service | metadata', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:metadata');
      assert.ok(service);
    });
  });
});
define("streampusher-frontend/tests/unit/services/socket-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Service | socket', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:socket');
      assert.ok(service);
    });
  });
});
define('streampusher-frontend/config/environment', [], function() {
  var prefix = 'streampusher-frontend';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('streampusher-frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
