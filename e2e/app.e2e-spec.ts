import { Angular2DynamicallyAddComponentToDomPage } from './app.po';

describe('angular2-dynamically-add-component-to-dom App', () => {
  let page: Angular2DynamicallyAddComponentToDomPage;

  beforeEach(() => {
    page = new Angular2DynamicallyAddComponentToDomPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
