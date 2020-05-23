import { Angular2SpringbootStarterPage } from './app.po';

describe('angular2-springboot-starter App', () => {
  let page: Angular2SpringbootStarterPage;

  beforeEach(() => {
    page = new Angular2SpringbootStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
