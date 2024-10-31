/// <reference types="cypress" />

describe('Testar Formularios', () => {

    beforeEach(() => {
        cy.visit('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdocs.google.com%2Fforms%2F%3Fusp%3Ddirect_url&followup=https%3A%2F%2Fdocs.google.com%2Fforms%2F%3Fusp%3Ddirect_url&ifkv=AcMMx-epbb01yxht-ZKultYJ5KuvJQm-5_siBf7wxGZ1909X7431iPCupyZ8LzS-IxSbXDmSPSAKUg&ltmpl=forms&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S899286%3A1730345507985651&ddm=1');
    });

    it('Acessar pagina', () => {
        cy.screenshot('Pagina encontrada');
    });

    it('Tentar login com e-mail inválido', () => {
        cy.get('#yDmH0d > c-wiz > div > div.JYXaTc > div > div.FO2vFd > div > div > div:nth-child(1) > div > button > div.VfPpkd-RLmnJb')
          .click({ force: true });
        
        cy.get('#yDmH0d > c-wiz > div > div.JYXaTc > div > div.FO2vFd > div > div > div:nth-child(2) > div > ul > li:nth-child(2)')
        .click({ force: true }); // Use { force: true } se necessário

        cy.pause(5000)

        cy.get('#firstName').type('Seu Nome'); // Substitua 'Seu Nome' pelo nome que deseja testar
        cy.get('#lastName').type('Seu Nome'); // Substitua 'Seu Nome' pelo nome que deseja testar
        cy.screenshot('Nome_SobreNome')

        cy.get('#collectNameNext > div > button > div.VfPpkd-RLmnJb')
        .click({ force: true }); // Use { force: true } se necessário

        cy.get('#day')
        .click()
        .type('01');
        
        cy.get('#month').select('2'); // Substitua '2' pelo valor ou texto da opção desejada
        cy.get('#year')
        .click()
        .type('1980');

        cy.get('#gender').select('1'); // Substitua '2' pelo valor ou texto da opção desejada

        cy.screenshot('InformaçõesBasicas')

        cy.get('#birthdaygenderNext > div > button > div.VfPpkd-RLmnJb')
        .click({ force: true }); // Use { force: true } se necessário
        cy.pause(5000);
    });
});
