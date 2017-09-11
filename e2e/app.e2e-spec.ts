import { VendingMachinePage } from './app.po';

describe('vending-machine App', () => {
  let page: VendingMachinePage;

  beforeEach(() => {
    page = new VendingMachinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
