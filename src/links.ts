import puppeteer from "puppeteer";

var search = "mad max"
export const getLinks = () => {

    

    run('https://altadefinizione.sale/?s=' + search, () => {

        console.log("imgSources");
        const divs = document.querySelectorAll('.col-lg-3.col-md-4.col-xs-4.mb-30')
        const imgSources = Array.from(divs, div => div.querySelector("a")?.href)

        return imgSources

    })

}


const run = async (link: string, pageCall: () => any) => {
    const browser = await puppeteer.launch({
        headless: true,
        slowMo: 100, // slow down by 250ms
    });

    const [page] = await browser.pages();

    await page.goto(link);


    const data = await page.evaluate(pageCall);

    console.log(data);



}

export default (v : string) => {
    search = v
    getLinks()
}