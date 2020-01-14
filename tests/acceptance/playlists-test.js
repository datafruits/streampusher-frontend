import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | playlists', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /playlists', async function(assert) {
    await visit('/playlists');

    assert.equal(currentURL(), '/playlists');
  });
  test('create a new playlist', async function(assert) {
  });

  test('uploading a new track', async function(assert) {
  });

  test('editing a track', async function(assert) {
  });
});
