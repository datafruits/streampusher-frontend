import { underscore } from '@ember/string';
import JSONAPISerializer from '@ember-data/serializer/json-api';
import classic from 'ember-classic-decorator';

@classic
export default class ApplicationSerializer extends JSONAPISerializer {
  // do i need this or not???
  //
  // for posting/patching i might???
  //
  // keyForAttribute(attr) {
  //   return underscore(attr);
  // }
}
