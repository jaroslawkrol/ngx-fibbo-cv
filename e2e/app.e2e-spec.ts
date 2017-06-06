import { CvAngular2Page } from './app.po';

describe('cv-angular2 App', function() {
  let page: CvAngular2Page;

  beforeEach(() => {
    page = new CvAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
