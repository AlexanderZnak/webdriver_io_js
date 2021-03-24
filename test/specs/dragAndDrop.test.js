const internetPage = require("../../pages/internet.page");

describe("Drag and Drop", ()=>{
    it('should drag column A to column B', function () {
        browser.url("/drag_and_drop")
        internetPage.dragColumnAToColumnB()
        assert.equal("A", internetPage.columnBHeader.getText())
        assert.equal("B", internetPage.columnAHeader.getText())
    });

})