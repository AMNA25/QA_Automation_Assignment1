class google_search{
    visit(url){
        cy.visit(url)
    }
    get searchField(){
        return cy.get('div.a4bIc')
    }
    
    clickSearchField(value){
        const field=this.searchField
        field.type(value +'{enter}')
        return this;
    }
   
    
}module.exports=new google_search();
