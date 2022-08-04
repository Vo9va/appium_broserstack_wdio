import AbstractComponent from "../abstract.component";

class ProductsPage extends AbstractComponent{
  /** Selectors */
  get $productCart(){
    return $(`~test-ADD TO CART`)
  }

  get $basket(){
    return $(`~test-Cart`)
  }

  /** Methods */
  async clickFirstCard(){
    return await this.waitThanClick(await this.$productCart)
  }

  async clickSecondCard(){
    return await this.waitThanClick(await this.$productCart)
  }

  async clickOnBasket(){
    return await this.waitThanClick(await this.$basket)
  }

  /** Assertions */
}

export const productsPage = new ProductsPage();
