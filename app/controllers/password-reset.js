import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import { isEmpty } from "@ember/utils";
import ENV from "streampusher-frontend/config/environment";
import fetch from "fetch";

export default class PasswordResetController extends Controller {
  @service flashMessages;
  passwordResetUrl = `${ENV.API_HOST}/users/password`;

  @tracked
  login = "";

  get cantSubmit() {
    return isEmpty(this.login);
  }

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
      .then((data) => {
        console.log(data);
        if (data.status == 201) {
          this.flashMessages.success("Password reset link sent!");
        } else {
          this.flashMessages.danger("Something went wrong!");
        }
      })
      .catch((error) => {
        console.log(error);
        this.flashMessages.danger("Something went wrong!");
      });
  }
}
