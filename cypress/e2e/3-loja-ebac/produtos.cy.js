/// <refence types="cypress" />

describe('funcionalidade: produtos', () => {

    beforeEach (() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
            //.first()
            //.last()
            //.eq(2)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()

        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
});