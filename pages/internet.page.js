class InternetPage {
    get pageHeader() {
        return $("h1.heading")
    };

    get subHeading() {
        return $("h2")
    };

    get pageFooter() {
        return $("#page-footer")
    };

    get parent() {
        return $("ul")
    };

    get h3Header() {
        return $("h3")
    }

    get childElements() {
        return this.parent.$$("li")
    };

    get target() {
        return $(".example #target")
    }

    get iframeBody() {
        return $("#tinymce")
    }

    get iframe() {
        return $("#mce_0_ifr")
    }

    get result() {
        return $(".example #result")
    }

    get hereLink() {
        return $(".example a")
    }

    get columnA() {
        return $("#column-a")
    }

    get columnB() {
        return $("#column-b")
    }

    get columnAHeader() {
        return $("#column-a header")
    }

    get columnBHeader() {
        return $("#column-b header")
    }

    get dropdownMenu() {
        return $("#dropdown")
    }

    get dropdownMenuOption1() {
        return $("#dropdown option:nth-child(2)")
    }

    get dropdownMenuOption2() {
        return $("#dropdown option:nth-child(3)")
    }

    get enableButton() {return $("#input-example button")}
    get inputEnabledField() {
        return $("#input-example input")
    }

    /**
     * Click the Enable/Disable Button
     */
    clickEnableButton() {
        this.enableButton.isDisplayed()
        this.enableButton.waitForDisplayed()
        this.enableButton.click()
    }

    javascriptAlertButton(index) {
        return $(`.example li:nth-child(${index}) button`)
    }

    /**
     * Click the specified javascript alert button
     * @param {Number} index the index of the element
     */
    clickJavascriptAlertButton(index) {
        this.javascriptAlertButton(index).waitForDisplayed()
        this.javascriptAlertButton(index).click()
    }

    clickDropdownMenu() {
        this.dropdownMenu.waitForDisplayed()
        this.dropdownMenu.click()
    }

    clickDropdownMenuOption1() {
        this.dropdownMenuOption1.waitForDisplayed()
        this.dropdownMenuOption1.click()
    }

    clickDropdownMenuOption2() {
        this.dropdownMenuOption2.waitForDisplayed()
        this.dropdownMenuOption2.click()
    }


    /**
     * Drag box A to box B
     */
    dragColumnAToColumnB(){
        const elementA = this.columnA
        const elementB = this.columnB
        elementA.buttonDown().then(moveTo())
        // const bLocationX = Math.floor(elementB.getLocation("x"))
        // const bLocationY = Math.floor(elementB.getLocation("y"))
        // elementA.dragAndDrop({x: bLocationX, y: bLocationY})
        // elementB.moveTo()
        browser.pause(3000)
    }


    /**
     * Enter text in the iframe
     * @param {String} text the text to be entered
     */
    sendTextToBody(text) {
        this.iframeBody.waitForDisplayed()
        this.iframeBody.clearValue()
        this.iframeBody.click()
        this.iframeBody.keys(text)
    }

    /**
     * Click the "click here" link
     */
    clickHereLink(){
        this.hereLink.waitForDisplayed()
        this.hereLink.click()
    }

    /**
     * Clicks the target input field
     */
    clickTarget() {
        this.target.waitForDisplayed()
        this.target.click()
    }

    /**
     * Send keyboard to Target
     * @param {String} text The keyboard text to enter
     */
    sendKeysToTarget(text) {
        this.target.waitForDisplayed()
        this.target.keys(text)
    }

    /**
     * scrolls to the page footer
     */
    scrollToPageFooter() {
        this.pageFooter.scrollIntoView()
    }

    getResultText() {
        this.result.waitForDisplayed()
        return this.result.getText()
    }

    specificChildElement(index) {
        return this.parent.$(`li:nth-child(${index})`);
    };

    figures(index) {
        return $(`.example .figure:nth-child(${index}) img`)
    }

    figuresDetails(index) {
        return $(`.example .figure:nth-child(${index}) .figcaption h5`)
    }

    /**
     * Hovers over the specified image
     * @param {Number} index the specific index of the image
     */
    hoverOnFigure(index) {
        this.figures(index).waitForDisplayed()
        this.figures(index).moveTo(1, 1)
    }

    /**
     * Returns the text of the figure details
     * @param {Number} index the index of the element
     */
    getFigureDetailsText(index) {
        this.figuresDetails(index).waitForDisplayed()
        return this.figuresDetails(index).getText()
    }

    get firstLink() {
        return this.specificChildElement(1).$("a");
    };

    link(index) {
        return $(`ul li:nth-child(${index}) a`)
    }

    /**
     * Clicks on the link base on the index provided
     * @param {Number} index the index of the element
     */
    clickLink(index) {
        this.link(index).waitForDisplayed()
        this.link(index).click()
    }

    get userName() {
        return $("#username")
    }

    get password() {
        return $("#password")
    }

    /**
     * Enter the username into the field
     * @param {String} text username to be entered
     */
    enterUserName(text) {
        this.userName.waitForDisplayed()
        this.userName.setValue(text)
    }

    /**
     * Enter the username into the field
     * @param {String} text username to be entered
     */
    enterPassword(text) {
        this.password.waitForDisplayed()
        this.password.setValue(text)
    }

    getLiText() {
        this.childElements.filter((element) => {
            console.log(element.getText())
        });
    };

    checkboxes(index) {
        return $(`#checkboxes input:nth-child(${index})`)
    }

    clickCheckBox(index) {
        this.checkboxes(index).waitForDisplayed()
        this.checkboxes(index).click()
    }

    getSpecificElementText(index) {
        this.specificChildElement(index).waitForDisplayed()
        return this.specificChildElement(index).getText()
    };

    clickOnLink() {
        if (this.firstLink.isDisplayed() === true) {
            this.firstLink.click();
        }
        this.h3Header.waitForDisplayed()
    };

}

module.exports = new InternetPage();