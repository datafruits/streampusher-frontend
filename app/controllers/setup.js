import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from "streampusher-frontend/config/environment";
import fetch from 'fetch';

export default Controller.extend({
  flashMessages: service(),
  store: service(),
  session: service(),
  actions: {
    submit(){
      let data = {
        signup_form: {
          email: this.email,
          password: this.password,
          radio_name: this.radioName
        }
      };

      fetch(`${ENV.API_HOST}/setup.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(() => {
        this.session.authenticate('authenticator:devise', this.email, this.password).then(() => {
          this.flashMessages.success('Signing you in...');
        }).catch(() => {
          this.flashMessages.danger('Could not sign you in!');
        });
      }).catch((error) => {
        console.log(error);
        this.flashMessages.danger('Could not setup radio!');
      });
    }
  }
});
