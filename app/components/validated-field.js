import Component from '@ember/component';

export default Component.extend({
  actions: {
    validateProperty(changeset, property) {
      console.log('validating property');
      return changeset.validate(property);
    }
  }
});
