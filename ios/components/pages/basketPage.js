class BasketPage{
  /** Methods */
  async scrollDown(){
    await browser.execute("mobile: scroll", { direction: 'down' });
  };

  async clickCheckoutButton(){
    const checkoutButton = await $(`~test-CHECKOUT`);
    await checkoutButton.click();
  };

  /** Assertions */
  async checkThatFirstCardInBasketIsDisplayed() {
    let firstCard =  await $(`~Sauce Labs Backpack`);
    expect(await firstCard.isDisplayed()).toBeTruthy();
  }

  async checkThatSecondCardInBasketIsDisplayed() {
    let firstCard =  await $(`~Sauce Labs Bike Light`);
    expect(await firstCard.isDisplayed()).toBeTruthy();
  }
}

module.exports = new BasketPage();
