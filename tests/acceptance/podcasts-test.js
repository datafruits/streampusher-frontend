import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | podcasts', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /podcasts', async function(assert) {
    await visit('/podcasts');

    assert.equal(currentURL(), '/podcasts');
  });
  test('creating a podcast', async function(assert) {
  });
  test('editing a podcast', async function(assert) {
  });
});
