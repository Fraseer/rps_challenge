describe("The Game Page", () => {
  it("is expected to successfully render", () => {
    cy.visit("/");
    cy.get("[data-cy=play-button]").click();
    cy.intercept
  });

});