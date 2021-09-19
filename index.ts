import puppeteer from "puppeteer"





(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100, // slow down by 250ms
    });
    try {
        const [page] = await browser.pages();

        await page.goto('https://altadefinizione.sale/?s=matrix');

        const data = await page.evaluate(() => {
            const divs = document.querySelectorAll('.col-lg-3.col-md-4.col-xs-4.mb-30');
            console.log(divs.item(1));
             
            const imgSources = Array.from(divs, div => div.querySelector("a")?.href);
            return imgSources;
        });
        console.log(data);
        
        
    } catch (err) { console.error(err); } finally { await browser.close(); }
})();