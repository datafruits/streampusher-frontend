import { validatePresence } from 'ember-changeset-validations/validators';

export default {
  title: validatePresence(true),
  playlist: validatePresence(true),
  guest: validatePresence({ presence: true, on: 'isGuest' }),
};