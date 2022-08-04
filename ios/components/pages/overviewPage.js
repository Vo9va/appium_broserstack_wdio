class OverviewPage {
  //** Methods */
  async scrollDown() {
    await browser.execute("mobile: scroll", { direction: 'down' });
  };

  async clickFinishButton() {
    const finishButton = await $(`~test-FINISH`)
    await finishButton.click()
  };

  //** Assertions */
  async checkThatTotalValueIsDisplayed() {
    let firstCard =  await $(`~Total: $43.18`);
    expect(await firstCard.isDisplayed()).toBeTruthy();
  }

  async checkThatSuccessfulTextIsDisplayed() {
    let firstCard =  await $(`~THANK YOU FOR YOU ORDER`);
    expect(await firstCard.isDisplayed()).toBeTruthy();
  }
}

module.exports = new OverviewPage();
