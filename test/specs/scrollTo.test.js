const internetPage = require("../../pages/internet.page")

describe("Scroll to Element", () => {

    it('should scroll to the footer', function () {
        browser.url("/")
        internetPage.pageHeader.waitForDisplayed()
        internetPage.scrollToPageFooter()
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())
    });
})