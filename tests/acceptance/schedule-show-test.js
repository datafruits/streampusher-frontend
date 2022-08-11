import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | schedule show', function (hooks) {
  setupApplicationTest(hooks);

  test('scheduling a new show', async function (assert) {
    //login
    await visit('/schedule/new');

    assert.equal(currentURL(), '/schedule');

    // fill in form
  });
});
