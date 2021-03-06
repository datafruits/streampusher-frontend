import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | dashboard', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /dashboard', async function(assert) {
    await visit('/dashboard');

    assert.equal(currentURL(), '/dashboard');
  });
});
