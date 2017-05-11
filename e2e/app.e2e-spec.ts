import { ViccPage } from './app.po';

describe('vicc App', () => {
  let page: ViccPage;

  beforeEach(() => {
    page = new ViccPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
