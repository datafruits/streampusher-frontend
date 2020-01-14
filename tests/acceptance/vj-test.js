import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | vj', function(hooks) {
  setupApplicationTest(hooks);

  test('turning vj on and off', async function(assert) {
    await visit('/vj');

    assert.equal(currentURL(), '/vj');
  });
});
