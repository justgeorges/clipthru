const puppeteer = require("puppeteer");

async function automatePageSource(address) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Navigate to the specified address
  await page.goto(address);

  // Get the page source
  const pageSource = await page.content();

  // Save the page source to a file (e.g., output.html)
  const fs = require("fs");
  fs.writeFileSync("output.html", pageSource);

  await browser.close();
}

// Example usage
const address = "https://google.com";
automatePageSource(address);
