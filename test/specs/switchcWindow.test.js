const internetPage = require("../../pages/internet.page")

describe("Switch window", ()=> {
    it('should switch to the next window', function () {
        browser.url("/windows")
        internetPage.clickHereLink()
        browser.switchWindow("/windows/new")
        assert.equal(true, internetPage.h3Header.isExisting())
        assert.equal(true, internetPage.h3Header.isDisplayed())
        assert.equal("New Window", internetPage.h3Header.getText())
    });
})