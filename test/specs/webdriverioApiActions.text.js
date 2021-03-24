const internetPage = require("../../pages/internet.page")

describe("WebdriverIO API Actions", function () {
    it('should hover on figure 1', function () {
        browser.url("/hovers")
        internetPage.hoverOnFigure(3)
        assert.equal("name: user1", internetPage.getFigureDetailsText(3))
    });

    it('should hover on figure 2', function () {
        browser.url("/hovers")
        internetPage.hoverOnFigure(4)
        assert.equal("name: user2", internetPage.getFigureDetailsText(4))
    });

    it('should hover on figure 3', function () {
        browser.url("/hovers")
        internetPage.hoverOnFigure(5)
        assert.equal("name: user3", internetPage.getFigureDetailsText(5))
    });

    it('should send keyboard value Backspace', function () {
        browser.url("/key_presses")
        internetPage.clickTarget()
        internetPage.sendKeysToTarget("Backspace")
        assert.equal("You entered: BACK_SPACE", internetPage.getResultText())
    });

    it('should send keyboard value Tab', function () {
        browser.url("/key_presses")
        internetPage.clickTarget()
        internetPage.sendKeysToTarget("Tab")
        assert.equal("You entered: TAB", internetPage.getResultText())
    });
})