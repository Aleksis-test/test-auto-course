/// <reference types="cypress" />

describe("Pierwszy test", () => {
    it("Otworzenie strony google.com", () => {
        cy.visit("http://google.com");
    })
})