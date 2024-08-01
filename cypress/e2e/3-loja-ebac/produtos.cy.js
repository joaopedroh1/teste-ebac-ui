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

    it('deve buscar um produto com sucesso' , () => {
        let produto = 'Apollo Running Short'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain' , produto)
    });

    it('deve visitar a pagina do produto' , () => {
        produtosPage.visitarProduto('Aero Daily Fitness Tee')
        cy.get('.product_title').should('contain' , 'Aero Daily Fitness Tee')
    });

    it('deve adicionar produto ao carrinho' , () => {
        let qtd = 9 
        produtosPage.buscarProduto('Ingrid Running Jacket')
        produtosPage.addProdutoCarrinho('M', 'Red', qtd)

        cy.get('.woocommerce-message').should('contain',  qtd + ' × “Ingrid Running Jacket” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados' , () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade)

                cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        })
    });
});