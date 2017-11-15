import { browser, by, element } from 'protractor';

export class Ng2TimedoutPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('timedout-root h1')).getText();
  }
}
