import { helper } from '@ember/component/helper';
import moment from 'moment';

export default helper(function formattedDay(day/*, named*/) {
  console.log(day);
  return moment(day).format('dddd MMMM Do YYYY');
});
