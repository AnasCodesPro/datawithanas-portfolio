import puppeteer from 'puppeteer-core';

const WIDTHS = [375, 768, 1024, 1440];
const OUT = 'C:\\Users\\mul\\AppData\\Local\\Temp\\claude\\C--Users-mul-Desktop-datawithanas-portfolio\\d0ebcb32-c87f-465f-b0f6-bd8773932969\\scratchpad\\';

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: true,
  args: ['--no-sandbox'],
});

for (const W of WIDTHS) {
  const page = await browser.newPage();
  await page.setViewport({ width: W, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle0' });

  const res = await page.evaluate(() => {
    const viewW = document.documentElement.clientWidth;
    const off = [];
    document.querySelectorAll('*').forEach((el) => {
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      // ignore intentionally-clipped decorative layers
      if (r.right > viewW + 1 && cs.position !== 'absolute' && cs.position !== 'fixed') {
        off.push({ tag: el.tagName.toLowerCase(), cls: (el.className||'').toString().slice(0,60), right: Math.round(r.right) });
      }
    });
    off.sort((a,b)=>b.right-a.right);
    return { docW: document.documentElement.scrollWidth, viewW, off: off.slice(0,6) };
  });
  console.log(`[${W}] scrollW=${res.docW} clientW=${res.viewW} OVERFLOW=${res.docW-res.viewW}` + (res.off.length?` offenders:`:` clean`));
  res.off.forEach((o)=>console.log(`    <${o.tag} "${o.cls}"> R=${o.right}`));

  await page.screenshot({ path: OUT + `p-${W}.png`, fullPage: true });
  await page.close();
}
await browser.close();
console.log('done');
