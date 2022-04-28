import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | login', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('logging in', async function (assert) {
    this.server.post('/users/sign_in', () => {
      return { success: 'true', login: 'datafruits', token: 'hotdog$' };
    });
    await visit('/login');

    await fillIn('input#login', 'info@datafruits.fm');
    await fillIn('input#password', 'password');
    await click('[data-test-submit-button]');
    assert.true(
      document
        .querySelector('.flash-message.alert-success')
        .textContent.includes('Logged in!')
    );

    assert.equal(currentURL(), '/dashboard');
  });
});
