describe("Bet Test", () => {
  it("Can bet and delete from the Bet Slip", () => {
    cy.visit("http://localhost:3000/");
    cy.get(':nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root > .MuiButton-label > .MuiPaper-root > :nth-child(2)').click();
    cy.wait(5000);
    cy.get('.MuiPaper-root > :nth-child(3) > .MuiButtonBase-root > .MuiButton-label').click();
    cy.wait(8000);
    cy.get('.MuiListItemIcon-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click();
  });
  it("Can bet and delete from the Button", () => {
    cy.visit("http://localhost:3000/");
    cy.get(':nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root > .MuiButton-label > .MuiPaper-root > :nth-child(2)').click();
    cy.wait(5000);
    cy.get('.MuiListItemIcon-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click();
    cy.wait(5000);
    cy.get(':nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root > .MuiButton-label > .MuiPaper-root > :nth-child(2)').click();

  });
});