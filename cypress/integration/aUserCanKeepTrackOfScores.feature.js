describe("When a game is won", () => {
  beforeEach(() => {
    cy.visit("/gamepage", {
      onBeforeLoad(win) {
        cy.stub(win.Math, "random").returns(0);
      },
    });
  });

  it.only("by the computer is expected that the computer score card will add one", () => {
    cy.get("[data-cy=scissors-button]").click();
    cy.get("[data-cy=computer-score-card]").should("contain", 1)
  })

  it("by the player is expected that the computer score card will add one", () => {
    cy.get("[data-cy=scissors-button]").click();
    cy.get("[data-cy=player-score-card]").should("contain", 1)
  })
})