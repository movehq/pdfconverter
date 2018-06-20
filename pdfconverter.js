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
      printBackground: 'True',
      format: 'Letter',
      margin: {
      	top: 20,
      	bottom: 18,
      	left: 18,
      	right: 18
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