/// <reference types="cypress"/>

describe('Funcionalidade: login' , () => {

    beforeEach (()  => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
}); 

    afterEach ( () => {
        cy.screenshot()
    });

    it('deve fazer login com sucesso' , () => {
        cy.get('#username') .type('testejoao@teste.com.br')
        cy.get('#password') .type ('kilerucv12')
        cy.get('.woocommerce-form > .button').click ()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain' , 'Olá, testejoao (não é testejoao? Sair)')        
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username') .type('teste+@teste.com.br')
        cy.get('#password') .type ('kilerucv12')
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.woocommerce-error'). should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir uma senha invalida', () => {
         cy.get('#username') .type('testejoao@teste.com.br')
         cy.get('#password') .type ('kilerucv')
         cy.get('.woocommerce-form > .button').click ()
         cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail testejoao@teste.com.br está incorreta. Perdeu a senha?')
         cy.get('.woocommerce-error').should('exist') 
        });

})