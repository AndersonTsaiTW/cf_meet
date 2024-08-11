import puppeteer from 'puppeteer';

describe('#1 End-to-end: show/hide event details', () => {
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


  test('#1.1 end-to-end: When user hasn’t searched for a city, show upcoming events from all cities.', async () => {
    const eventDetails = await page.$('#event-list');
    expect(eventDetails).toBeDefined();
  });

  test('#1.2 end-to-end: User should see a list of suggestions when they search for a city.', async () => {
    const cityTextBox = await page.$('input[type="text"]');
    await cityTextBox.click({ clickCount: 3 });
    await cityTextBox.press('Backspace');
    await cityTextBox.type('Berlin');

    const suggestionList = await page.$('[role="list"]');
    expect(suggestionList).toBeDefined();
  });

  test('#1.3 end-to-end: User can select a city from the suggested list.', async () => {
    const cityTextBox = await page.$('input.city');
    await cityTextBox.click({ clickCount: 3 });
    await cityTextBox.press('Backspace');
    await cityTextBox.type('Berlin', { delay: 100 }); // re-type "Berlin"

    // wait for it
    await page.waitForSelector('.suggestions');

    // click 'Berlin, Germany'
    await page.$eval('.suggestions', (suggestionsList) => {
      const item = Array.from(suggestionsList.querySelectorAll('li')).find(li => li.innerText.includes('Berlin, Germany'));
      if (item) {
        item.click();
      } else {
        // print all suggestions to check
        const allTexts = Array.from(suggestionsList.querySelectorAll('li')).map(li => li.innerText);
        console.log("All suggestion items:", allTexts);
        throw new Error('Suggestion item for "Berlin, Germany" not found');
      }
    });

    // check the events after click Berlin button
    const EventListDOM = await page.$('#event-list');
    const allRenderedEventItems = await EventListDOM.$$('li.event');
    for (let i = 0; i < allRenderedEventItems.length; i++) {
      const locationText = await allRenderedEventItems[i].$eval('p:nth-of-type(2)', el => el.textContent);
      expect(locationText).toContain('Berlin, Germany');
    }
  });


});


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

