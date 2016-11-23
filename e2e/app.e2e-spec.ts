import { GGStatPage } from './app.po';

describe('ggstat App', function() {
  let page: GGStatPage;

  beforeEach(() => {
    page = new GGStatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
