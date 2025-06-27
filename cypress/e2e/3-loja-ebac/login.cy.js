/// <reference types = "cypress"/>

describe('Funcionalidade: Login', () =>{

    beforeEach(() => {
         cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('tai.vassao@teste.com.br')
        cy.get('#password').type('Tai123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, tai.vassao (não é tai.vassao? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
        cy.get('#username').type('taii@teste.com.br')
        cy.get('#password').type('Tai123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir uma senha invalida', () => {
        cy.get('#username').type('tai.vassao@teste.com.br')
        cy.get('#password').type('Tai000')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail tai.vassao@teste.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
        

    });

})