describe("The Welcome Page of the game", () => {
  it("is expected to successfully render", () => {
    cy.visit("/");
    cy.get("[data-cy=welcome-header]").should(
      "contain",
      "Lets Play ROCK, PAPER, SCISSORS"
    );
    cy.get("[data-cy=play-button]").should("exist");
  });
});
