const internetPage = require("../../pages/internet.page")

describe("Wait For Enabled", () =>{
    it('should wait for the input field to be enabled', function () {
        browser.url("/dynamic_controls")
        internetPage.clickEnableButton()
        internetPage.inputEnabledField.waitForEnabled()
        assert.equal(true, internetPage.inputEnabledField.isEnabled())
    });
})