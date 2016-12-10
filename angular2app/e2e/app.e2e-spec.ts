import { StarbookCliPage } from './app.po';

describe('starbook-cli App', function() {
  let page: StarbookCliPage;

  beforeEach(() => {
    page = new StarbookCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
