import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | blog posts', function(hooks) {
  setupApplicationTest(hooks);

  test('creating a new post', async function(assert) {
    await visit('/blog-posts');
    await click("New");

    //fill in title
    //fill in body

    assert.equal(currentURL(), '/blog-posts');
  });

  test('editing a post', async function(assert) {
  });
});
