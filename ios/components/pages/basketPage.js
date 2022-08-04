import AbstractComponent from "../abstract.component";

class BasketPage extends AbstractComponent{
  /** Selectors */
  get $checkoutButton(){
    return $(`~test-CHECKOUT`)
  }

  /** Methods */
  async scrollDown(){
    return await this.mobileScrollDown();
  }

  async clickCheckoutButton(){
    return await this.waitThanClick(await this.$checkoutButton)
  }

  /** Assertions */
}

export const basketPage = new BasketPage();
