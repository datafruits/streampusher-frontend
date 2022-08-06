import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  fillIn,
  click,
  triggerKeyEvent,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { authenticateSession } from 'ember-simple-auth/test-support';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | djs', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /djs', async function (assert) {
    await authenticateSession();
    console.log('authenticated?');

    await visit('/djs');
    console.log('visited djs');

    assert.equal(currentURL(), '/djs');
  });
  test('search djs by username', async function (assert) {
    await authenticateSession();
    await visit('/djs');
    await fillIn('input#username', 'djnameko');
    await fillIn('input#email', 'dj.nameko@datafruits.fm');
    await click('[data-test-submit-button]');
    assert.true(
      document
        .querySelector('.flash-message.alert-success')
        .textContent.includes('Saved user!')
    );
    await fillIn('input#username', 'cheese monster');
    await fillIn('input#email', 'cheese@datafruits.fm');
    await click('[data-test-submit-button]');
    assert.true(
      document
        .querySelector('.flash-message.alert-success')
        .textContent.includes('Saved user!')
    );

    await fillIn('[data-test-djs-search]', 'doesnt exist');
    await triggerKeyEvent('[data-test-djs-search]', 'keyup', 'Up');
    assert.true(
      document
        .querySelector('[data-test-djs-table] tbody')
        .textContent.includes('No result')
    );

    await fillIn('[data-test-djs-search]', 'cheese');
    await triggerKeyEvent('[data-test-djs-search]', 'keyup', 'Up');
    assert.true(
      document
        .querySelector('[data-test-djs-table] tbody tr td')
        .textContent.includes('cheese monster')
    );
  });
  test('add new dj', async function (assert) {
    await authenticateSession();
    await visit('/djs');
    await fillIn('input#username', 'djnameko');
    await fillIn('input#email', 'dj.nameko@datafruits.fm');
    await click('[data-test-submit-button]');
    assert.true(
      document
        .querySelector('.flash-message.alert-success')
        .textContent.includes('Saved user!')
    );
  });
  test('edit dj', async function (assert) {
    await authenticateSession();
    await visit('/djs');
    await fillIn('input#username', 'djnameko');
    await fillIn('input#email', 'dj.nameko@datafruits.fm');
    await click('[data-test-submit-button]');
    assert.true(
      document
        .querySelector('.flash-message.alert-success')
        .textContent.includes('Saved user!')
    );

    await click('[data-test-edit-link]');
    assert.equal(currentURL(), `/djs/1`);
    await fillIn('input#username', 'djnameko2');
    await fillIn('input#email', 'dj.nameko33@datafruits.fm');
    await click('[data-test-submit-button]');
    assert.true(
      document
        .querySelectorAll('.flash-message.alert-success')[1]
        .textContent.includes('Updated user!')
    );

    assert.equal(currentURL(), '/djs');
  });
});
