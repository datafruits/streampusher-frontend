import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | blog posts', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /blog-posts', async function(assert) {
    await visit('/blog-posts');

    assert.equal(currentURL(), '/blog-posts');
  });

  test('editing a post', async function(assert) {
  });
});
