describe('Testes na Home', () => {
    beforeEach(() => {
        cy.viewport(1920,1080)
        cy.visit('https://www.amazon.com.br/')
        cy.wait(3000)
    });

    
    it('Validação se está com a url correta ', () => {
        
        cy.url() // Validar a url da página
            .should('eq', 'https://www.amazon.com.br/')
    });

    it('Pesquisando por algum produto', () => {
        // pesquisando por Teclado Logitech
        cy.get('[class="nav-input nav-progressive-attribute"]')
            .first()
            .click()
            .type('teclado logitech')
            .wait(1000)
            .type('{ENTER}')

        // validando a url se possui logitech teclado 
        cy.get('[class="a-color-state a-text-bold"]')
            .should('have.text','"teclado logitech"')
    }); 

    it('Entrando na PDP de um produto', () => {
        // pesquisando por Teclado Logitech
        cy.get('[class="nav-input nav-progressive-attribute"]')
            .first()
            .click()
            .type('teclado logitech')
            .wait(1000)
            .type('{ENTER}')

        // validando a url se possui logitech teclado 
        cy.get('[class="a-color-state a-text-bold"]')
            .should('have.text', '"teclado logitech"')

        // clicando em um produto 
        cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]>span')
            .first()
            .click()
            .wait(1000)

        // validar se está em uma PDP da logitech
        cy.get('[id="bylineInfo"]')
            .first()
            .should('have.text','Visite a loja Logitech')
    });

    it('Forçando erro na leitura de url', () => {
        // pesquisando por Teclado Logitech
        cy.get('[class="nav-input nav-progressive-attribute"]')
            .first()
            .click()
            .type('teclado logitech')
            .wait(1000)
            .type('{ENTER}')

        // validando a url se possui logitech teclado 
        cy.get('[class="a-color-state a-text-bold"]')
            .should('have.text', '"teclado logitech"')

        // clicando em um produto 
        cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]>span')
            .first()
            .click()
            .wait(1000)

        // Validar a url errada // 
        cy.url()
            .should('have.text', 'teclado+logitech')
    });
    
});