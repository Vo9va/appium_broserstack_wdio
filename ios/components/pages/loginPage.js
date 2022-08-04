class LoginPage {
  /** Methods */
  async setUserName() {
    let userNameField = await $(`~test-Username`)
    await userNameField.setValue("standard_user");
  };

  async setPassword() {
    let passwordField = await $(`~Password`)
    await passwordField.setValue("secret_sauce");
  };

  async clickLoginButton() {
    let loginButton = await $(`~test-LOGIN`)
    await loginButton.click();
  };
}

module.exports = new LoginPage();
