class Element {

    getDragNDropLink() {
        return cy.xpath("//a[text()='Drag and Drop']");
    }

    getFileUploadLink(){
        return cy.xpath("//a[text()='File Upload']");
    }

    getHoversLink(){
        return cy.xpath("//a[text()='Hovers']");
    }

    getHorizontalSliderLink(){
        return cy.xpath("//a[text()='Horizontal Slider']");
    }

    getNotificationMessagesLink(){
        return cy.xpath("//a[text()='Notification Messages']");
    }
} export default Element
