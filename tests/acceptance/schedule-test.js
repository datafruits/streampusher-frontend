import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | schedule', function(hooks) {
  setupApplicationTest(hooks);

  test('scheduling a new show', async function(assert) {
    await visit('/schedule/new');

    assert.equal(currentURL(), '/schedule/new');
  });
  test('editing scheduled show', async function(assert) {
  });
});
