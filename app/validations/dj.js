import {
  validatePresence,
  validateFormat,
} from 'ember-changeset-validations/validators';

export default {
  username: validatePresence(true),
  email: [validateFormat({ type: 'email' })],
};
