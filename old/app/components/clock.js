import Component from '@glimmer/component';
import moment from 'moment';

export default class ClockComponent extends Component {
  setTime() {
    const timezone = this.args.timeZone;
    var now = moment().tz(timezone).format('HH:mm:ss');
    var abbr = moment.tz.zone(timezone).abbr(moment());
    // $(".current-time").html(now);
    // $(".current-timezone").html(abbr);
    //setTimeout(setTime, 500);
  }

  // $(document).ready(function(){
  //   setTime();
  // });
}
