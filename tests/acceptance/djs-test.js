import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | djs', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /djs', async function(assert) {
    await visit('/djs');

    assert.equal(currentURL(), '/djs');
  });
  test('add new dj', async function(assert) {
  });
  test('edit dj', async function(assert) {
  });
});
