'use strict';

const puppeteer = require('puppeteer');

const createPdf = async() => {
  let browser;
  try {
    browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto(process.env.source, {waitUntil: 'networkidle2'});
    await page.pdf({
      path: "/prints/"+process.env.destination+".pdf",
      printBackground: true,
      // format: 'Letter',
      width: 816,
      height: 1056,
      margin: {
      	top: 24,
      	bottom: 24,
      	left: 24,
      	right: 24
      }
    });
  } catch (err) {
      console.log(err.message);
  } finally {
    if (browser) {
      browser.close();
    }
    process.exit();
  }
};
createPdf();
