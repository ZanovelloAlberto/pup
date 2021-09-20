import puppeteer from "puppeteer"


var link = 'https://altadefinizione.sale/mad-max-interceptor-streaming-4k/'


const DoomMp4 = async () => {

    

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
        const v = "closeAltaCommunityBanner"
        const Anchor = document.getElementById(v) as HTMLAnchorElement
        Anchor.click()
        return document.getElementById("main-player-wrapper")?.querySelector("iframe")?.src

    })
    
    console.log(streamTape);

    //--------------< NOT WORKING >------------------//
    if (streamTape) {
        const res = await page.goto(streamTape)
        const mp4 = await page.evaluate(() => {
            const vide = document.getElementById("mainvideo") as HTMLVideoElement
            // document.querySelectorAll('mainvideo').forEach((n : HTMLVideoElement)=>{n.src})
        })
        
        
    }


}


export default (v : string) => {
    link = v
    DoomMp4()
}
