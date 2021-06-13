import * as puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({headless: false, slowMo: 30});
    const page = await browser.newPage();
    await page.goto('http://localhost:8080');
    await page.waitForSelector('#titleInput');
    await page.type('#titleInput', 'Title');
    await page.type('#bodyInput', 'Body');
    await page.click('#addNoteButton');
    await page.waitFor(100);
    await page.screenshot({path: 'screen-after-added-note'});
    await browser.close();
})