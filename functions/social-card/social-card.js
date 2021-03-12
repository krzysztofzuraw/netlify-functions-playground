const playwright = require("playwright-aws-lambda");
const nunjucks = require("nunjucks");
const path = require("path");

exports.handler = async function (event, ctx) {
  // const browser = await playwright.launchChromium();
  // const page = await browser.newPage();
  // page.setViewportSize({
  //   width: 1200,
  //   height: 630,
  // });
  console.log(path.resolve(__dirname, "src/index.html"));
  console.log(process.env);
  nunjucks.configure({ autoescape: true });
  const html = nunjucks.render(
    path.resolve(process.env.LAMBDA_TASK_ROOT, "src/index.html"),
    {
      title:
        "How to dispatch multiple actions based on api call in redux-observable",
    }
  );
  // await page.setContent(html);
  // const screenshotBuffer = await page.screenshot();
  // await browser.close();
  return {
    // isBase64Encoded: true,
    statusCode: 200,
    body: html,
    // headers: {
    //   "Content-Type": "image/png",
    //   "Content-Length": screenshotBuffer.length.toString(),
    // },
    // body: screenshotBuffer.toString("base64"),
  };
};
