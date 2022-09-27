import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class History extends Service {
  @tracked previousRoute: string | undefined;
}
