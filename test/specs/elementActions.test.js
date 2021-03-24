const internetPage = require("../../pages/internet.page")
describe("Test element actions", function () {
   it("Should click element", () => {
       browser.url("/");
       internetPage.clickOnLink()
       expect(browser.getUrl()).equals("https://the-internet.herokuapp.com/abtest")
   })

    it("should get text", ()=> {
        browser.url("/")
        expect(internetPage.getSpecificElementText(1)).equals("A/B Testing")
    })

    it("should click checkbox", ()=> {
        browser.url("/")
        internetPage.clickLink(6)
        internetPage.clickCheckBox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(true)
    })

    it('should uncheck checkbox', function () {
        internetPage.clickCheckBox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(false)
    })
    it('should enter username', function () {
        browser.url("/login")
        internetPage.enterUserName("Aliaksandr")
        assert.equal("Aliaksandr", internetPage.userName.getValue())
    })

    it('should enter password', function () {
        browser.url("/login")
        internetPage.enterPassword("Aliaksandr123")
        assert.equal("Aliaksandr123", internetPage.password.getValue())
    })

    it('should clear value', function () {
        internetPage.userName.click()
        internetPage.userName.clearValue()
        assert.equal("", internetPage.userName.getValue())
    })

    it('should send keyboard value', function () {
        internetPage.clickTarget()
        internetPage.sendKeysToTarget("Enter")
        assert.equal("Enter", internetPage.getResultText())
    });



})