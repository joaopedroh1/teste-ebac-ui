/// <reference types="cypress" />

describe('funcionalidade: Detalhes da conta', () => {

    beforeEach (() => {
        cy.visit('minha-conta/edit-account/')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha )
        })
        
    });
it('Deve completar detalhes da conta', ()=> {
    cy.detalhesConta('joao', 'hass', 'joao.hass')
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
});

});