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
        const arr1=[]
        this.names_link.each(($el) => {
        arr1.push($el.text().split('\n'))});
        return arr1;
    }
    get screenNameList(){
        const arr2=[]
        this.screenNames_link.each(($el) => {
        arr2.push($el.text())});
        return arr2;
    }
    get appearanceList(){
        const arr3=[]
        this.appearance_link.each(($el) => {
        arr3.push($el.text())});
        return arr3;
    }
    get object(){
        const data=[]
        cy.wrap(this.nameList).each(($el, index)=>{
        data.push({'Name':this.nameList[1], 'Screen Name':this.screenNameList[index], 'Appearance':this.appearanceList[index]}).then()
        cy.log(data)
    }
        
)}}

module.exports=new linkPage();