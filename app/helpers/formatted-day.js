import { helper } from '@ember/component/helper';
import moment from 'moment';

export default helper(function formattedDay(day/*, named*/) {
  return moment(day).format('dddd MMMM Do YYYY');
});
