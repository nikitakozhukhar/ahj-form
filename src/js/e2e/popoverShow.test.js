import puppeteer from 'puppeteer';
jest.setTimeout(30000);

describe('popover show', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  
  test('popover should rendered on page with class .popover by click on button', async () => {
    
    await page.goto('http://localhost:8080');

    await page.waitForSelector('.popover-container');

    const button = await page.$('.popover-show-btn');

   
    await button.click();

    await page.waitForSelector('.popover');
  });

  afterEach(async () => {
    await browser.close();
  })
});