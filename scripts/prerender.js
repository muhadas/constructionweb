import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

const routes = ['/', '/aboutus', '/projects','/blogs','/organization','/certification','/contactus'];

const distDir = "dist";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const route of routes) {
    const url = `http://localhost:4173${route}`;

    await page.goto(url, { waitUntil: "networkidle0" });

    const html = await page.content();

    const filePath =
      route === "/"
        ? `${distDir}/index.html`
        : `${distDir}${route}/index.html`;

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);

    console.log(`✅ Pre-rendered: ${route}`);
  }

  await browser.close();
})();