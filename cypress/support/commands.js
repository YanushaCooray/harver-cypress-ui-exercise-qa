
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

/* 
    Compare the screenshot
*/
addMatchImageSnapshotCommand({
    failureThreshold: 0.03, // threshold for entire image
    failureThresholdType: 'percent', // percent of image or number of pixels
    customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
    capture: 'viewport', // capture viewport in screenshot
});

/* 
    Drag and drop the object
*/
Cypress.Commands.add('dragAndDrop',()=>{
    const dt = new DataTransfer();
    cy.get('#column-a').trigger('dragstart',{dataTransfer:dt});
    cy.get('#column-b').trigger('drop',{dataTransfer:dt});
});

/* 
    Upload a file
*/
Cypress.Commands.add('uploadFile', (fileName) => {
    cy.get('#file-upload').click({ force: true }).attachFile(fileName);
    cy.get('#file-submit', { timeout: 10000 }).click({ force: true });
});

/* 
    Hover over the image
*/
Cypress.Commands.add('hoverOverTheImage', () => {
    cy.get('#content > div > div:nth-child(5)').trigger('mouseover');
    cy.get('#content > div > div:nth-child(5) > div').invoke('show');
});

/* 
    slide the element horizontally
*/
Cypress.Commands.add('horizontalSlider',(value)=>{
    cy.get("#content > div > div > input[type=range]")
    .invoke("val", value)
    .trigger("change")
    .click({ force: true });
});
