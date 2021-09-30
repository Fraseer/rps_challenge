describe("The Game Page", () => {
  beforeEach(() => {
    cy.visit("/gamepage", {
      onBeforeLoad(win) {
        cy.stub(win.Math, "random").returns(0);
      },
    });
  });

  it("is expected to result in a player win", () => {
    cy.get("[data-cy=paper-button]").click();
    cy.get("[data-cy=player-option]").should("contain", "Paper");
    cy.get("[data-cy=computer-option]").should("contain", "Rock");
    cy.get("[data-cy=result]").should("contain", "Player Wins!");
  });

  it("is expected to result in a computer win", () => {
    cy.get("[data-cy=scissors-button]").click();
    cy.get("[data-cy=player-option]").should("contain", "Scissors");
    cy.get("[data-cy=computer-option]").should("contain", "Rock");
    cy.get("[data-cy=result]").should("contain", "Computer Wins!");
  });

  it("is expected to result in a draw", () => {
    cy.get("[data-cy=rock-button]").click();
    cy.get("[data-cy=player-option]").should("contain", "Rock");
    cy.get("[data-cy=computer-option]").should("contain", "Rock");
    cy.get("[data-cy=result]").should("contain", "It's a draw!");
  });
});
