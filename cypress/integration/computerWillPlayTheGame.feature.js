describe("The Game Page", () => {
  it("is expected to successfully render", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=play-button]").click();
    cy.intercept
  });

});