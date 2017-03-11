import { SimpleChatFrontPage } from './app.po';

describe('simple-chat-front App', () => {
  let page: SimpleChatFrontPage;

  beforeEach(() => {
    page = new SimpleChatFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
