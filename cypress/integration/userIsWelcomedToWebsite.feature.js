describe('The Welcome Page of the game', () => {
  it('is expected to successfully render', () => {
    cy.visit("http://localhost:3000")
    cy.get("[data-cy=header]").should("contain", "Welcome To The ROCK, PAPER, SCISSORS Game")
    cy.get("[data-cy=play-button]").should("exist")
  })
});