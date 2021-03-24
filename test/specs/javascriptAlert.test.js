const internetPage = require("../../pages/internet.page");

describe("JavaScript Alerts", () => {
    it('should get text of Alert', function () {
        browser.url("/javascript_alerts")
        internetPage.clickJavascriptAlertButton(1)
        assert("I am a JS Alert", browser.getAlertText())
    });

    it('should accept Alert', function () {
        browser.acceptAlert()
        assert("You successfully clicked an alert", internetPage.getResultText())
    });

    it('should dismiss Alert', function () {
        internetPage.clickJavascriptAlertButton(2)
        browser.dismissAlert()
        assert.equal("You clicked: Cancel", internetPage.getResultText())
    });

    it('should send text to the alert', function () {
        internetPage.clickJavascriptAlertButton(3)
        browser.sendAlertText("This is some text")
        browser.acceptAlert()
        assert.equal("You entered: This is some text", internetPage.getResultText())

    });
})