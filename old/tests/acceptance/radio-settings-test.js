import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | radio settings', function (hooks) {
  setupApplicationTest(hooks);

  test('editing radio settings', async function (assert) {
    await visit('/radio-settings');

    assert.equal(currentURL(), '/radio-settings');
  });
});
