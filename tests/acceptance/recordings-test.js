import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | recordings', function(hooks) {
  setupApplicationTest(hooks);

  test('publishing a recording', async function(assert) {
    await visit('/recordings');

    assert.equal(currentURL(), '/recordings');
  });
});
