import chai from 'chai';
import chaiThings from 'chai-things';
import chaiAlmost from 'chai-almost';
import chaiInteger from 'chai-integer';

chai.use(chaiThings);
chai.use(chaiAlmost());
chai.use(chaiInteger);
const { expect } = chai;

export default class AbstractComponent {
  constructor(relativeUrl) {
  }

  /** Wait... */
  async waitFor(condition, timeout = browser.config.waitforTimeout, message) {
    await browser.waitUntil(condition, {
      timeout,
      timeoutMsg: message,
    });
  }


  async waitThanClick($element, timeInMilliseconds = 10 * 1000) {
    await $element.waitForDisplayed({ timeout: timeInMilliseconds });
    await $element.click();
  }

  async waitForDisplayed($element, timeInMilliseconds = 10 * 1000) {
    await $element.waitForDisplayed({ timeout: timeInMilliseconds });
  }

  async mobileScrollDown() {
    await browser.execute("mobile: scroll", { direction: 'down' });
  }

  async appWaitThanClick($element, timeInMilliseconds = 10 * 1000) {
    await $element.waitForDisplayed({ timeout: timeInMilliseconds });
    await $element.click();
  }

  async waitThanSetValue($element, value, timeInMilliseconds = 5 * 1000) {
    await $element.waitForDisplayed({ timeout: timeInMilliseconds });
    await $element.setValue(value);
  }

  /** Abstract assertions */
  async checkElementIsDisplayed($elem, timeout = browser.config.waitforTimeout) {
    await this.waitFor(
      async () => await $elem.isDisplayed() === true,
      timeout,
      `Element '${$elem.selector}' should be displayed`,
    )
  }

  checkValuesAreEqual(value1, value2, message) {
    expect(value1, message).to.be.equal(value2);
  }

  checkElementContainsText(actualText, expectedText, message) {
    expect(actualText, message).to.include(expectedText);
  }
}
