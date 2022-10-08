import Component from '@glimmer/component';
import { action } from '@ember/object';

interface DjsRoleSelectArgs {
  changeset: any;
}

export default class DjsRoleSelect extends Component<DjsRoleSelectArgs> {
  roles = [
    'admin',
    'dj',
    'supporter',
    'vj'
  ]

  @action
  setRoles(roles: any): void {
    this.args.changeset.set('role', roles.join(' '));
  }

  get selectedRoles() {
    return this.args.changeset.role?.split(" ");
  }
}
