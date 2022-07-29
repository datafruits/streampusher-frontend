import classic from 'ember-classic-decorator';
import JSONSerializer from '@ember-data/serializer/json';

@classic
export default class UserSerializer extends JSONSerializer {
  modelNameFromPayloadKey(payloadKey) {
    console.log(payloadKey);
    if (payloadKey === 'djs' || payloadKey === 'dj') {
      return 'user';
    } else {
      return super.modelNameFromPayloadKey(payloadKey);
    }
  }
}
