import { ZspaceuiPage } from './app.po';

describe('zspaceui App', () => {
  let page: ZspaceuiPage;

  beforeEach(() => {
    page = new ZspaceuiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
