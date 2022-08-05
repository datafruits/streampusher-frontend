import { helper } from '@ember/component/helper';
import moment from 'moment';

export default helper(function formattedDay(day/*, named*/) {
  return moment(day[0]).format('dddd MMMM Do YYYY');
});
