import classic from 'ember-classic-decorator';
import { ActiveModelSerializer } from 'active-model-adapter';

@classic
export default class User extends ActiveModelSerializer {
  modelNameFromPayloadKey(payloadKey) {
    console.log(payloadKey);
    if(payloadKey === 'djs') {
      return 'user';
    } else {
     return super.modelNameFromPayloadKey(payloadKey);
    }
  }
}
