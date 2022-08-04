class CheckoutPage {
  /** Methods */
  async setFirstName(){
    const firstNameField = await $(`~test-First Name`);
    await firstNameField.setValue("test")
  };

  async setLastName(){
    const lastNameField = await $(`~test-Last Name`);
    await lastNameField.setValue("test");
  };

  async setZipValue(){
    const zipField = await $(`~test-Zip/Postal Code`);
    await zipField.setValue("123456");
  };

  async clickContinueButton(){
    const continueButton = await $(`~test-CONTINUE`);
    await continueButton.click();
  };
}

module.exports = new CheckoutPage();
