import Controller from "@ember/controller";
import { action } from "@ember/object";
import { inject as service } from '@ember/service';
import ENV from "streampusher-frontend/config/environment";
import fetch from "fetch";

export default class PasswordResetController extends Controller {
  flashMessages: service(),
  passwordResetUrl = `${ENV.API_HOST}/users/password`;

  login = "";

  @action
  submit() {
    //post to /users/password with user[email]: fruitskiki@gmail.com
    //
    let data = {
      user: {
        email: this.login,
      },
    };

    fetch(this.passwordResetUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.flashMessages.success("Password reset link sent!");
      })
      .catch((error) => {
        console.log(error);
        this.flashMessages.danger("Something went wrong!");
      });
  }
}
