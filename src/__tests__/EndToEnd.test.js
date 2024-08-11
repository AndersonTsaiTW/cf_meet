import puppeteer from 'puppeteer';


describe('#2 End-to-end: show/hide event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    // Method 1
    browser = await puppeteer.launch(
      { timeout: 0 }
    );

    // Method 2

    // browser = await puppeteer.launch({
    //   headless: false,
    //   slowMo: 250, // slow down by 250ms,
    //   timeout: 0 // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    // });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('#2.1 end-to-end: An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .description');
    expect(eventDetails).toBeNull();
  });

  test('#2.2 end-to-end: User can expand an event to see details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .description');
    expect(eventDetails).toBeDefined();
  });

  test('#2.3 end-to-end: User can collapse an event to hide details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .description');
    expect(eventDetails).toBeNull();
  });
});