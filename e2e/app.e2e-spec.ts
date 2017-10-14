import { CodecampfrontendPage } from './app.po';

describe('codecampfrontend App', () => {
  let page: CodecampfrontendPage;

  beforeEach(() => {
    page = new CodecampfrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
