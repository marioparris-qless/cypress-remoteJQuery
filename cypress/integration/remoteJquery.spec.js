/// <reference types="Cypress" />

describe('Reproduce', () => {
  it('then fails because JQuery is not a function', () => {
    cy.visit('./index.html')

    cy.get('#button').then(button => {
      expect(button[0].id).to.equal('button')
    })

  });
});
