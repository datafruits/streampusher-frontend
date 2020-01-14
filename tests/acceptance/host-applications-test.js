import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | host applications', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /host-applications', async function(assert) {
    await visit('/host-applications');

    assert.equal(currentURL(), '/host-applications');
  });
});
