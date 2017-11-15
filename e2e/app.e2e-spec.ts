import { Ng2TimedoutPage } from './app.po';

describe('ng2-timedout App', () => {
  let page: Ng2TimedoutPage;

  beforeEach(() => {
    page = new Ng2TimedoutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to timedout!!');
  });
});
