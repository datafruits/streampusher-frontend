import { ActiveModelSerializer } from 'active-model-adapter';

export default class User extends ActiveModelSerializer {
  modelNameFromPayloadKey(payloadKey) {
    console.log(payloadKey);
    if (payloadKey === 'djs' || payloadKey === 'dj') {
      return 'user';
    } else {
      return super.modelNameFromPayloadKey(payloadKey);
    }
  }
}
