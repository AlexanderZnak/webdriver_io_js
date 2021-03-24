const internetPage = require("../../pages/internet.page")

describe("Switch to Iframe", ()=> {
    it('should switch to Iframe ', function () {
        browser.url("/iframe")
        internetPage.h3Header.waitForDisplayed()
        internetPage.iframe.waitForDisplayed()
        browser.switchToFrame(internetPage.iframe)
        internetPage.sendTextToBody("This is the text in the Iframe body")
        assert.equal("This is the text in the Iframe body", internetPage.iframeBody.getText())
    });
})