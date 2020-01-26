import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | admin', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /admin', async function(assert) {
    await visit('/admin');

    assert.equal(currentURL(), '/admin');
  });
});
