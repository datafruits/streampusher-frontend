import {
  validatePresence,
  validateLength,
} from 'ember-changeset-validations/validators';
import notInPast from 'streampusher-frontend/validators/not-in-past';
import notBeforeStart from 'streampusher-frontend/validators/not-before-start';

export default {
  title: validatePresence(true),
  guest: validatePresence({ presence: true, on: 'isGuest' }),
  // TODO
  start: notInPast(),
  end: [notInPast(), notBeforeStart()],
  description: validateLength({ max: 10000 }),
};
