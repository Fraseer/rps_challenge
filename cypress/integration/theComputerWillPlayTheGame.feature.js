describe("The Game Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=play-button]").click();
    cy.intercept(`${compOption}`),
      {
        fixture: "scissors.json",
      };
  });

  it("is expected to result in a player win", () => {
    cy.get("[data-cy=rock-button]").click();
    cy.get("[data-cy=result]").should("contain", "Player Wins!");
  });

  it("is expected to result in a computer win"),
    () => {
      cy.get("[data-cy=paper-button]").click();
      cy.get("[data-cy=result]").should("contain", "Computer Wins!");
    };
  it("is expected to result in a draw"),
    () => {
      cy.get("[data-cy=scissors-button]").click();
      cy.get("[data-cy=result]").should("contain", "It's a draw!");
    };
});
