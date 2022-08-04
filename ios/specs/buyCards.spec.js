import { loginPage } from '../components/pages/loginPage.js';
// import { productsPage } from "../pages/productsPage";
// import { basketPage } from "../pages/basketPage";
// import { checkoutPage } from "../pages/checkoutPage";
// import { overviewPage } from "../pages/overviewPage";

describe('Test Example', () => {
  it('Successful buy product cards', async () => {
    //login user
    await loginPage.setUserName();
    await loginPage.setPassword();
    await loginPage.clickLoginButton();
    //add few card to basket
    // await productsPage.clickFirstCard();
    // await productsPage.clickSecondCard();
    // await productsPage.clickOnBasket();
    // await basketPage.scrollDown();
    // await basketPage.clickCheckoutButton();
    // //fill information for chckout
    // await checkoutPage.setFirstName();
    // await checkoutPage.setLastName();
    // await checkoutPage.setZipValue();
    // await checkoutPage.clickContinueButton();
    //
    // await overviewPage.scrollDown();
    // await overviewPage.clickFinishButton();
  });
});
