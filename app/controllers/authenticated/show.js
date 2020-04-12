import classic from 'ember-classic-decorator';
import Controller from '@ember/controller';
import ScheduledShowValidations from '../../validations/scheduled-show';

@classic
export default class ShowController extends Controller {
  ScheduledShowValidations = ScheduledShowValidations;
}
