import Component from '@glimmer/component';
// ?? why doesnt this work
//import ScheduledShow from 'streampusher-frontend/models/scheduled-show';
import { htmlSafe } from '@ember/template';
import { SafeString } from 'handlebars';

interface ScheduledShowCardArgs {
  show: any;
}

export default class ScheduledShowCard extends Component<ScheduledShowCardArgs> {
  get backgroundStyle(): SafeString | undefined {
    const image = this.args.show.thumbImageUrl;
    if(image) {
      return htmlSafe(`background-image: url('${image}');`);
    } else {
      return undefined;
    }
  }
}
