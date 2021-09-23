import puppeteer from "puppeteer"


export default async (link: string) => {



    const browser = await puppeteer.launch({
        headless: true,
        slowMo: 100, // slow down by 250ms
    });

    const [page] = await browser.pages();

    await page.goto(link);


    const link2 = await page.evaluate(() => {
        const a = document.getElementById("iframeVid")

        return (a as HTMLIFrameElement).src
    });

    await page.goto(link2);

    const streamTape = await page.evaluate(() => {

        return document.getElementById("main-player-wrapper")?.querySelector("iframe")?.src

    })

    return (streamTape);


}