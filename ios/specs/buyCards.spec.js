const loginPage = require('../components/pages/loginPage.js');
const productsPage = require("../components/pages/productsPage");
const basketPage = require("../components/pages/basketPage");
const checkoutPage = require("../components/pages/checkoutPage");
const overviewPage = require("../components/pages/overviewPage");

describe('Test Example', () => {
  it('Successful buy product cards', async () => {
    //login user
    await loginPage.setUserName();
    await loginPage.setPassword();
    await loginPage.clickLoginButton();
    // //add few card to basket
    await productsPage.clickFirstCard();
    await productsPage.clickSecondCard();
    await productsPage.clickOnBasket();
    await basketPage.checkThatFirstCardInBasketIsDisplayed();
    await basketPage.checkThatSecondCardInBasketIsDisplayed();
    await basketPage.scrollDown();
    await basketPage.clickCheckoutButton();
    //fill information for checkout
    await checkoutPage.setFirstName();
    await checkoutPage.setLastName();
    await checkoutPage.setZipValue();
    await browser.hideKeyboard();
    await checkoutPage.clickContinueButton();
    //finish buy cards
    await overviewPage.scrollDown();
    await overviewPage.checkThatTotalValueIsDisplayed();
    await overviewPage.clickFinishButton();
    await overviewPage.checkThatSuccessfulTextIsDisplayed();
  });
});
