import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  modelNameFromPayloadKey(payloadKey){
    if(payloadKey === 'djs') {
      return payloadKey;
    } else {
     return this._super(payloadKey);
    }
  }
});
