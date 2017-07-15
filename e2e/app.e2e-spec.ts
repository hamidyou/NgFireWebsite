import { NgFireWebsitePage } from './app.po';

describe('ng-fire-website App', () => {
  let page: NgFireWebsitePage;

  beforeEach(() => {
    page = new NgFireWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
