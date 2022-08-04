import AbstractComponent from "../abstract.component";

class OverviewPage extends AbstractComponent {
  /** Selectors */
  get $finishButton() {
    return $(`~ test-FINISH`)
  }

  //** Methods */
  async scrollDown() {
    return await this.mobileScrollDown();
  }

  async clickFinishButton() {
    return await this.waitThanClick(await this.$finishButton)
  }

  //** Assertions */
}

export const overviewPage = new OverviewPage();
