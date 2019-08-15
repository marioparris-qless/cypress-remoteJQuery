/// <reference types="Cypress" />

describe('Reproduce', () => {
  it('does not trigger any errors with window.$ defined as function', () => {
    cy.visit('./index-function.html')

    cy.get('#button').then(button => {
      expect(button[0].id).to.equal('button')
    })
  });
});
