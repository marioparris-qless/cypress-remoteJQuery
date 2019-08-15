/// <reference types="Cypress" />

describe('Reproduce', () => {
  it('does not trigger any errors with JQuery', () => {
    cy.visit('./index-jquery.html')

    cy.get('#button').then(button => {
      expect(button[0].id).to.equal('button')
    })
  });
});
