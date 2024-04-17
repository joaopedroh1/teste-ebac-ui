/// <reference typed="cypress"/>

describe('Funcionalidade: login' , () => {
    
    it('deve fazer logi com sucesso' , () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username') .type('teste.joao@teste.com')
        cy.get('#password') .type ('kilerucv12')
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, teste.joao (não é teste.joao? Sair)')

    })
} )