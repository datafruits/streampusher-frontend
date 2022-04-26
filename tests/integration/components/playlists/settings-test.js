import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | playlists/settings', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Playlists::Settings />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Playlists::Settings>
        template block text
      </Playlists::Settings>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
