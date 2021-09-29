import { module, test } from "qunit";
import {
  visit,
  currentURL,
  click,
  fillIn,
  pauseTest,
} from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import { authenticateSession } from "ember-simple-auth/test-support";
import { setupMirage } from "ember-cli-mirage/test-support";

module("Acceptance | playlists", function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("visiting /playlists", async function (assert) {
    await authenticateSession();
    await visit("/playlists");

    assert.equal(currentURL(), "/playlists");
  });
  test("create a new playlist", async function (assert) {
    await authenticateSession();
    await visit("/playlists/");

    await click("[data-test-new-playlist-button]");
    assert.equal(currentURL(), "/playlists/new?tracksPage=1");

    await fillIn("input#name", "my new playlist");
    await click("[data-test-save-playlist-button]");
    assert.dom('.flash-message.alert-success').hasText('Created playlist!');
  });

  test("uploading a new track", async function (assert) {
    // await authenticateSession();
    // await visit("/playlists/");

  });

  test("add track to playlist", async function (assert) {});

  test("editing a track", async function (assert) {
    // set artwork
    // set scheduled show
  });

  test("edit playlist settings", async function (assert) {});
  test("navigate to a different playlist", async function (assert) {});

  test("reordering tracks", async function(assert) {});

  //delete playlist
});
