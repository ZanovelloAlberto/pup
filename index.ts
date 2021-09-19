import pup from "puppeteer"





async function run() {
    let browser = await pup.launch({ headless: false });
    let page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.setRequestInterception(true);
    page.on('request', (req) => {
        if (req.resourceType() == 'stylesheet' || req.resourceType() == 'font' || req.resourceType() == 'image') {
            req.abort();
        }
        else {
            req.continue();
        }
    });
    await page.goto('https://altadefinizione.sale/?s=terminal');

    // <div class="feed">aac
    //     <div class="tweet">Hello!</div>
    //     <div class="tweet">Hi!</div>
    // </div>
    // const feedHandle = await page.$('.feed');
    // expect(
    //     await feedHandle.$$eval('.tweet', (nodes) => nodes.map((n) => n.innerText))
    // ).toEqual(['Hello!', 'Hi!']);
    const feedHandle = await page.$$('.col-lg-3.col-md-4.col-xs-4.mb-30');
    !feedHandle && console.log("culo");
    

    console.log(feedHandle);
}
run();