/// <reference types="cypress" />

describe('Wpisywanie testu w wyszukiwarke', () => {
	it('Wpisywanie testu ', () => {
		cy.visit('/');
		cy.get('#search_block_top #search_query_top').type('przykładowa tersc {enter}');
		cy.get('#search_block_top #search_query_top').should("have.value", "przykładowa tersc ")
		cy.wait(3000);
		cy.get('#search_block_top #search_query_top').clear();
		cy.get("p.alert").should("be.visible").and("include.text", "No results")
	});
});
