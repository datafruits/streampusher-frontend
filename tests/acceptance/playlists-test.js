import { module, test } from 'qunit';
import { visit, currentURL, click, pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { authenticateSession } from 'ember-simple-auth/test-support';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | playlists', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /playlists', async function(assert) {
    await authenticateSession();
    await visit('/playlists');

    assert.equal(currentURL(), '/playlists');
  });
  test('create a new playlist', async function(assert) {
    await authenticateSession();
    await visit('/playlists');

    assert.equal(currentURL(), '/playlists');

    await pauseTest();
    await click("[data-test-new-playlist-button]");
    await fillIn("input#playlist-name", "my new playlist");
    await click("[data-test-save-playlist-button]");
    assert.equal(document.querySelector("[data-current-playlist]").textContent.includes("my new playlist"), true);
  });

  test('uploading a new track', async function(assert) {
  });

  test('add track to playlist', async function(assert) {
  });

  test('editing a track', async function(assert) {
    // set artwork
    // set scheduled show
  });
});
