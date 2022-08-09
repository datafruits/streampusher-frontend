import { validatePresence } from 'ember-changeset-validations/validators';
import notInPast from 'streampusher-frontend/validators/not-in-past';

export default {
  title: validatePresence(true),
  guest: validatePresence({ presence: true, on: 'isGuest' }),
  // TODO
  start: notInPast(),
  //startAt: validateNotInPast, validateNotAfterEndAt
  //endAt: validateNotInPast, validateNotBeforeStartAt
  //description: validateLength({ max: 10000 })
};
