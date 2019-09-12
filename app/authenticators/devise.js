import Devise from 'ember-simple-auth/authenticators/devise';
import ENV from 'streampusher-frontend/config/environment';

export default Devise.extend({
  serverTokenEndpoint: `${ENV.API_HOST}/users/sign_in`,
  identificationAttributeName: 'login'
});
