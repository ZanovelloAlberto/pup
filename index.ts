import puppeteer from "puppeteer"

const run = async (link: string, pageCall: () => void) => {
    const browser = await puppeteer.launch({
        headless: true,
        slowMo: 100, // slow down by 250ms
    });

    const [page] = await browser.pages();

    await page.goto(link);

    const data  = await page.evaluate(pageCall);

    console.log(data);



}
const clvid = "plyr__video-wrapper"

const getLinks = () => {

    const search = "mad max"

    run('https://altadefinizione.sale/?s=' + search, () => {

        console.log("imgSources");
        const divs = document.querySelectorAll('.col-lg-3.col-md-4.col-xs-4.mb-30')
        const imgSources = Array.from(divs, div => div.querySelector("a")?.href)

    })

}



const getMp4 = () => {

    run('https://altadefinizione.sale/mad-max-interceptor-streaming-4k/')
    // ()=>{
        const a = document.getElementById("iframeVid")
        const divs = document.querySelectorAll("Oppure, continua come ospite e guarda le pubblicità")
        console.log("a");
        
    }


}

getMp4()





