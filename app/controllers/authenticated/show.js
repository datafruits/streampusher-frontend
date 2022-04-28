import Controller from '@ember/controller';
import ScheduledShowValidations from '../../validations/scheduled-show';

export default class ShowController extends Controller {
  ScheduledShowValidations = ScheduledShowValidations;
}
