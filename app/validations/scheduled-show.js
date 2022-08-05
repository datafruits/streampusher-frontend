import { validatePresence } from 'ember-changeset-validations/validators';

export default {
  title: validatePresence(true),
  guest: validatePresence({ presence: true, on: 'isGuest' }),
  // TODO
  //startAt: validateNotInPast, validateNotAfterEndAt
  //endAt: validateNotInPast, validateNotBeforeStartAt
  //description: validateLength({ max: 10000 })
};
