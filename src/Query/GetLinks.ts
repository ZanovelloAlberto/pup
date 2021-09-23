import puppeteer from "puppeteer";
import { domain } from "../CheckDomain";


const run = async (search: string, domain: string) => {
    const browser = await puppeteer.launch({
        headless: true,
        slowMo: 100, // slow down by 250ms
    });

    const [page] = await browser.pages();



    await page.goto("https://" + domain + '/?s=' + search);

    const a = await page.evaluate(() => {

        const divs = document.querySelectorAll('.col-lg-3.col-md-4.col-xs-4.mb-30')
        const imgSources = Array.from(divs, div => div.querySelector("a")?.href)
        return imgSources
    })


    return a



}

export default (v: string) => {

    return run(v, domain)
}