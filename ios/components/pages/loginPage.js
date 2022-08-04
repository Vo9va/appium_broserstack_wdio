import  AbstractComponent from "../abstract.component";

class LoginPage extends AbstractComponent {
    /** Selectors */
  get $userNameField() {
    return $(`~ test-Username`)
  }

  get $passwordField() {
    return $(`~ Password`)
  }

  get $loginButton() {
    return $(`~ test-LOGIN`)
  }

  /** Methods */
  async setUserName() {
    return await this.waitThanSetValue(await this.$userNameField)
  }

  async setPassword() {
    return await this.waitThanSetValue(await this.$passwordField)
  }

  async clickLoginButton() {
    return await this.waitThanClick(await this.$loginButton)
  }

  /** Assertions */
}

export const loginPage = new LoginPage();
