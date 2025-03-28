/// <reference types="cypress" />

describe("Klikniecie w element na stronie", ()=>{
    it("Klikniecie w zakładke contact us", ()=>{
        cy.visit("/");
        cy.get("#contact-link a").click();
    })
})