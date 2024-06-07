/// <refence types="cypress" />
import produtosPage from "../../support/page-objects/produtos.page";

describe('funcionalidade: produtos', () => {

    beforeEach (() => {
        produtosPage.visitarUrl()
    });

    it('deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Atlas Fitness Tank')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it.only('deve buscar um produto com sucesso' , () => {
        let produto = 'Apollo Running Short'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain' , produto)
    });

    it('deve visitar a pagina do produto' , () => {

    });

    it('deve adicionar produto ao carrinho' , () => {

    });

});