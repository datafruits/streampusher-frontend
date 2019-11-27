import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend({
  modelNameFromPayloadKey(payloadKey){
    console.log(payloadKey);
    if(payloadKey === 'djs') {
      return 'user';
    } else {
     return this._super(payloadKey);
    }
  }
});
