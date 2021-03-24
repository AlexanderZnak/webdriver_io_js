const internetPage = require("../../pages/internet.page");

describe("Dropdown Menu", () => {
    it('should select option 1', function () {
        browser.url("/dropdown")
        internetPage.clickDropdownMenu()
        internetPage.clickDropdownMenuOption1()
        assert.equal(true, internetPage.dropdownMenuOption1.isSelected())
    });

    it('should select option 1', function () {
        browser.url("/dropdown")
        internetPage.clickDropdownMenu()
        internetPage.clickDropdownMenuOption2()
        assert.equal(true, internetPage.dropdownMenuOption2.isSelected())
    });
})