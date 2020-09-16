/// <reference types ="cypress" />

describe('Herokuapp', () => {
  
    it('Sign Up', ()=>{
     cy.fixture('input.json').then((input)=>{
     cy.fixture('castInfo.json').then((info)=>{
     cy.visit(input[3].value)
     cy.get('nav > :nth-child(3) > .MuiButton-label').click() //Click on not a user yet
     cy.get('form > .MuiBox-root > .MuiTypography-root').click()

     var data=info[4];
     var f_name=data.Name;
     var l_name=data['Screen Name'];

     cy.get('.jss418 > .MuiInputBase-root > .MuiInputBase-input').type(f_name) //first name

     cy.get('.jss422 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(l_name) //last name

     cy.get('form > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(input[4].value)//email 
     
     cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type(input[5].value) //password

     cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type(input[5].value) //retype password
     //cy.get('.jss423 > .MuiButtonBase-root').click() //click on Sign up button (It works when a new email address is typed)
    })})})
    it ('Sign In', function(){
        cy.fixture('input.json').then((input)=>{
        cy.get('.jss423 > .MuiTypography-root').click()
      
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type(input[4].value)  //email
       
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(input[5].value)  //password
        cy.get('.MuiBox-root > .MuiButtonBase-root').click()  //Sign in
})})
    it('Posting a Flyer', function(){
        cy.get(':nth-child(2) > .MuiButton-label > a').click()
        cy.get('.MuiBox-root > .MuiTypography-h6')
        .then((text0)=>{
            // Stores the text of the field 
            const type0= text0.text()
            //Types the stored text on the targeted field
            cy.get('form > :nth-child(1) > .MuiInputBase-root').type(`${type0}`).click() //Writes 'Posting a flyer'
        })
        cy.get(':nth-child(1) > .MuiListItemText-root > .MuiTypography-root')
        .then((text1)=>{
            const type1= text1.text()
            cy.get('form > :nth-child(2) > .MuiInputBase-root').type(`${type1}`+ '{enter}') //Writes '1. Be honest'
        })
        cy.get(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root')
        .then((text2)=>{
            const type2= text2.text()
            cy.get('form > :nth-child(2) > .MuiInputBase-root').type(`${type2}`+'{enter}') //writes '2. Remember the human'
        })
        cy.get(':nth-child(5) > .MuiListItemText-root > .MuiTypography-root')
        .then((text3)=>{
            const type3= text3.text()
            cy.get('form > :nth-child(2) > .MuiInputBase-root').type(`${type3}`+'{enter}') //writes '3. Behave like you would in real life'
        })
        cy.get(':nth-child(7) > .MuiListItemText-root > .MuiTypography-root')
        .then((text4)=>{
            const type4= text4.text()
            cy.get('form > :nth-child(2) > .MuiInputBase-root').type(`${type4}`+'{enter}') //writes '4. search for duplicates before posting'
        })
        cy.get(':nth-child(9) > .MuiListItemText-root > .MuiTypography-root')
        .then((text5)=>{
            const type5= text5.text()
            cy.get('form > :nth-child(2) > .MuiInputBase-root').type(`${type5}`) //writes '5. Read the first rule again'
        })
        cy.fixture('input.json').then((input)=>{
        cy.get('.jss656 > .MuiInputBase-root > .MuiInputBase-input').type(input[6].value) //phone number
       
        cy.get('.jss686 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(input[7].value)  //address
        
        cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type(input[8].value +'{enter}')  //tag1
       
        cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type(input[9].value +'{enter}') //tag2
      
        cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type(input[10].value+'{enter}') //tag3
        cy.get('.MuiButton-contained').click()
        cy.get('nav > :nth-child(1)').click()
    })})
    it('Taking Screenshot',() =>{
        //wait for page to load fully
        cy.wait(5000)
        cy.get(':nth-child(1) > .MuiPaper-root > .jss796 > .MuiTypography-h5').then((name)=>{
            const screenshot_name=name.text()
            cy.screenshot(screenshot_name)
        })
    })
    it ('Logout', ()=>{
        cy.get('nav > :nth-child(3)').click()
      
    }) 
        

})