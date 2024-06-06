/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: login' , () => {

    beforeEach (()  => {
        cy.visit ('minha-conta')
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

        it('Deve fazer login com sucesso - Usando massa de dados', () => {
            cy.get('#username').type(perfil.usuario)
            cy.get('#password').type (perfil.senha)
            cy.get('.woocommerce-form > .button').click ()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain' , 'Olá, testejoao (não é testejoao? Sair)')
        });

        it('Deve fazer login com sucesso - Usando Fixture', () => {
            cy.fixture('perfil').then( dados => {
                cy.get('#username').type(dados.usuario , { log:false})
                cy.get('#password').type (dados.senha , { log:false})
                cy.get('.woocommerce-form > .button').click ()
                cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain' , 'Olá, testejoao (não é testejoao? Sair)')
            })
        });  

        it('Deve fazer login com sucesso - usando Comandos customizado', () =>  {
            cy.login('testejoao@teste.com.br' , 'kilerucv12')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain' , 'Olá, testejoao (não é testejoao? Sair)')
        });
})