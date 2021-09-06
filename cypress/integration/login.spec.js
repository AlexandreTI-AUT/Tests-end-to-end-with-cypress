it('successfully logs in', () => {
    cy.intercept('GET', '**/notes').as('getNotes')

    cy.login()

    cy.wait(10000)

    cy.wait('@getNotes')
    cy.contains('h1', 'Your Notes').should('be.visible')
})