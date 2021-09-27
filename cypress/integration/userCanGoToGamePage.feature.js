describe("The Game Page", () => {
  it("is expected to successfully render", () => {
    cy.visit("/");
    cy.get("[data-cy=play-button]").click();
    cy.get("[data-cy=game-header]").should("contain", "Game On!");
  });

  it("is expected that the player can choose from one of the three options", () => {
    cy.get("[data-cy=rock-button]").should("exist");
    cy.get("[data-cy=paper-button]").should("exist");
    cy.get("[data-cy=scissors-button]").should("exist");
  });
});
