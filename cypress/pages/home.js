class Home {

    get womenTab(){
        return cy.get(`a[title="Women"]`)
    }
	clickPageWomen() {
		this.womenTab.click();
	}
}
export default new Home();
