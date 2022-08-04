class ProductsPage {
  /** Methods */
  async clickFirstCard(){
    const productCart = await $(`~test-ADD TO CART`)
    await productCart.click();
  };

  async clickSecondCard(){
    const productCart = await $(`~test-ADD TO CART`)
    await productCart.click();
  };

  async clickOnBasket(){
    const basket = await $(`~test-Cart`)
    await basket.click();
  };
}

module.exports = new ProductsPage();
