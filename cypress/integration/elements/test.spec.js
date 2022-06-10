/// <reference types="cypress" />
import Element from '../../src/element';
const siteUrl = Cypress.config().commonUrl;
const element = new Element();

context('Check the functionality of five elements', () => {

  beforeEach(() => {
    cy.visit(siteUrl);
  });

  it("TC : 001 - Verify that element A can drag and drop into element B", () => {

    const dragNDropLink = element.getDragNDropLink();
    dragNDropLink.click({ force: true });
    /* 
     1 - call drag and drop command
     2 - verify the screenshot
    */
    cy.dragAndDrop();
    cy.get('body > div:nth-child(2)').matchImageSnapshot();

  });

  it("TC : 002 - Verify that  file can be uploaded", () => {

    const fileUploadLink = element.getFileUploadLink();
    fileUploadLink.click({ force: true });
    /* 
      1 - call file upload command
      2 - verify the successful message and screenshot
    */
    cy.uploadFile('image.jpeg');
    cy.get('#content > div > h3').contains('File Uploaded!');
    cy.get('#content > div > h3').matchImageSnapshot();

  });


  it("TC : 003 - Verify that hidden text is displayed ,when hover over the image", () => {

    const hoversLink = element.getHoversLink();
    hoversLink.click({ force: true });
    /* 
      1 - hover over the image
      2 - validate the hidden text is displayed
    */
    cy.hoverOverTheImage();
    cy.get('#content > div > div:nth-child(5) > div > h5').should('have.text', 'name: user3');
    cy.get('#content > div > div:nth-child(5) > div > a').should('have.text', 'View profile');
    cy.get('#content').matchImageSnapshot();

  });

  it("TC : 004 - Verify that horizontal slider is working", () => {

    const value = 1.5;
    const horizontalSliderLink = element.getHorizontalSliderLink();
    horizontalSliderLink.click({ force: true });
    /* 
      slide the element horizontally
      verify the value and screenshot
    */
    cy.horizontalSlider(value);
    cy.get('#range').contains(value);
    cy.get('#content > div > div').matchImageSnapshot();

  });

  it("TC : 005 - Verify that notification message is displayed,when click the 'click here'", () => {

    const notificationMessagesLink = element.getNotificationMessagesLink();
    notificationMessagesLink.click({ force: true });
    /* 
      click the link 
      and verify
    */
    cy.xpath('//a[text()="Click here"]',{timeout: 10000}).click({ force: true });
    cy.get('#flash').contains('Action successful');
    cy.get('#flash').matchImageSnapshot();

  });

});