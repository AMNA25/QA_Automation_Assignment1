class linkPage{
    searchKeyword(name){
        const name1= cy.contains(name)
        name1.click()
        return this;
    }
    get names_link(){
        return cy.get('.cast_list > tbody > :nth-child(n) > :nth-child(2)')
    }
    get screenNames_link(){
        return cy.get('tr:nth-child(n) > td.character') 
    }
    get appearance_link(){
        return cy.get(':nth-child(n) > td.character > a.toggle-episodes')
    }
    get nameList(){
        var arr1=[]
        this.names_link.then((el) => {
        arr1.push(el.text().split('\n'))});
        cy.log(arr1)
        return arr1;
    }
    get screenNameList(){
        var arr2=[]
        this.screenNames_link.then((el) => {
        arr2.push(el.text())});
        return arr2;
    }
    get appearanceList(){
        var arr3=[]
        this.appearance_link.then((el) => {
        arr3.push(el.text())});
        return arr3;
    }
        
}

module.exports=new linkPage();