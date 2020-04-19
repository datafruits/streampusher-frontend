import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { authenticateSession } from 'ember-simple-auth/test-support';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | djs', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /djs', async function(assert) {
    await authenticateSession();
    console.log('authenticated?');

    await visit('/djs');
    console.log('visited djs');

    assert.equal(currentURL(), '/djs');
  });
  test('add new dj', async function(assert) {
    await authenticateSession();
    await visit('/djs');
    await fillIn("input#username", "djnameko");
    await fillIn("input#email", "dj.nameko@datafruits.fm");
    await click("[data-test-submit-button]");
    assert.equal(document.querySelector(".flash-message.alert-success").textContent.includes("Saved user!"), true);
  });
  test('edit dj', async function(assert) {
    await authenticateSession();
    await visit('/djs');
    await fillIn("input#username", "djnameko");
    await fillIn("input#email", "dj.nameko@datafruits.fm");
    await click("[data-test-submit-button]");
    assert.equal(document.querySelector(".flash-message.alert-success").textContent.includes("Saved user!"), true);

    await click("[data-test-edit-link]");
    await fillIn("input#username", "djnameko2");
    await fillIn("input#email", "dj.nameko33@datafruits.fm");
    await click("[data-test-submit-button]");
    assert.equal(document.querySelector(".flash-message.alert-success").textContent.includes("Updated user!"), true);

    assert.equal(currentURL(), '/djs');
  });
});
