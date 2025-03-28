/// <reference types="cypress" />
import Base from "../pages/base";
import Home from "../pages/home";

describe('Test z wybieraniem select', () => {
	it('Wybieranie select ', () => {
		Base.openHomePage();
		Home.clickPageWomen();
	});
	it('wybranie filtra Instock', () => {
		cy.get('#selectProductSort').select('In stock');
		cy.get('#selectProductSort').should('have.value', 'quantity:desc');
	});

	it('wybranie filtra Instock', () => {
		cy.get('#selectProductSort').select('Product Name: A to Z');
		cy.get('#selectProductSort').should('have.value', 'name:asc');
	});
});
