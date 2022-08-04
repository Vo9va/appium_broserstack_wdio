import AbstractComponent from "../abstract.component";

class CheckoutPage extends AbstractComponent{
  /** Selectors */
  get $firstNameField(){
    return $(`~test-First Name`)
  }

  get $lastNameField(){
    return $(`~test-Last Name`)
  }

  get $zipField(){
    return $(`~test-Zip/Postal Code`)
  }

  get $continueButton(){
    return $(`~test-CONTINUE`)
  }

  /** Methods */
  async setFirstName(){
    return await this.waitThanSetValue(await this.$firstNameField);
  }

  async setLastName(){
    return await this.waitThanSetValue(await this.$lastNameField);
  }

  async setZipValue(){
    return await this.waitThanSetValue(await this.$zipField);
  }

  async clickContinueButton(){
    return await this.waitThanClick(await this.$continueButton);
  }

  /** Assertions */
}

export const checkoutPage = new CheckoutPage();
