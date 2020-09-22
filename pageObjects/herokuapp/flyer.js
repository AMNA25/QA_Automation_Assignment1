class flyer{
    get postFlyerButton(){
        return cy.get(':nth-child(2) > .MuiButton-label > a')
    }
    get heading(){
        return cy.get('.MuiBox-root > .MuiTypography-h6')
    }
    get headingField(){
        return cy.get('form > :nth-child(1) > .MuiInputBase-root')
    }
    get detailsField(){
       return cy.get('form > :nth-child(2) > .MuiInputBase-root')
    }
    get phone(){
       return cy.get('.jss656 > .MuiInputBase-root > .MuiInputBase-input')
    }
    get address(){
       return cy.get('.jss686 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input')
    }
    get tag(){
       return cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    }
    get postButton(){
       return cy.get('.MuiButton-contained')
    }
    get homeButton(){
        return cy.get('nav > :nth-child(1)')
    }
    clickPostFlyerButton(){
        this.postFlyerButton.click()
    }
    typeHeading(){
        this.heading.then(($text0)=>{
        const type0= $text0.text()
        this.headingField.type(`${type0}`).click()
    })
    }
    fillDetails(arr){
       cy.wrap(arr).each((index)=>{
        cy.get(`:nth-child(${index}) > .MuiListItemText-root > .MuiTypography-root`).then(($text1)=>{
        const type1=$text1.text()
        this.detailsField.type(`${type1}`+ '{enter}')  
       })})
    }
    typePhone(phoneNo){
        this.phone.type(phoneNo)
    }
    typeAddress(add){
        this.address.type(add)
    }
    fillTag(taG){
        this.tag.type(taG + '{enter}')
    }
    clickPostButton(){
        this.postButton.click()
    }
    clickHomeButton(){
        this.homeButton.click()
    }
}module.exports=new flyer();