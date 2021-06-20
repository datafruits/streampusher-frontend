import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | setup radio', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('creating radio', async function(assert) {
    this.server.post('/setup.json', () => {
      return {
        "user":{"id":1,"username":"datafruits","social_identities":[]}
      };
    });

    this.server.get('/setup/allowed.json', () => {
      return "ok";
    });

    await visit('/setup');

    assert.equal(currentURL(), '/setup');
    await fillIn("input#email", "info@datafruits.fm");
    await fillIn("input#radio-name", "datafruits");
    await fillIn("input#password", "password");
    await click("[data-test-submit-button]");
    assert.dom(document.querySelector(".flash-message.alert-success")).hasText('Signing you in');
    assert.equal(currentURL(), '/dashboard');
  });

  test("it redirects if radio is already setup", async function(assert) {
  });
});
