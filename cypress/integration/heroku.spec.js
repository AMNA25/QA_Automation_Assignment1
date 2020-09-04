/// <reference types ="cypress" />

describe('Herokuapp', () => {
  
    it('Sign Up', ()=>{
     cy.visit('https://emumba-test.herokuapp.com')
     cy.get('nav > :nth-child(3) > .MuiButton-label').click() //Click on not a user yet
     cy.get('form > .MuiBox-root > .MuiTypography-root').click()
     cy.get('.jss418 > .MuiInputBase-root > .MuiInputBase-input').type('Mandeep') //first name
     cy.get('.jss422 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Dhillon') //last name
     cy.get('form > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('querty29@gmail.com') //email 
     cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('12345678') //password
     cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type('12345678') //retype password
     //cy.get('.jss423 > .MuiButtonBase-root').click() //click on Sign up button
    })
    it ('Sign In', function(){
        cy.get('.jss423 > .MuiTypography-root').click()
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('querty29@gmail.com')  
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('12345678')
        cy.get('.MuiBox-root > .MuiButtonBase-root').click()  //Sign in
})
    it('Posting a Flyer', function(){
        cy.get(':nth-child(2) > .MuiButton-label > a').click()
        cy.get('.MuiBox-root > .MuiTypography-h6')
        .then(($text0)=>{
            // Stores the text of the field 
            const type0= $text0.text()
            //Types the stored text on the targeted field
            cy.get('form > :nth-child(1) > .MuiInputBase-root').type(`${type0}`).click() //Writes 'Posting a flyer'
        })
        cy.get(':nth-child(1) > .MuiListItemText-root > .MuiTypography-root')
        .then(($text1)=>{
            const type1= $text1.text()
            cy.get('form > :nth-child(2) > .MuiInputBase-root').type(`${type1}`+ '{enter}') //Writes '1. Be honest'
        })
        cy.get(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root')
        .then(($text2)=>{
            const type2= $text2.text()
            cy.get('form > :nth-child(2) > .MuiInputBase-root').type(`${type2}`+'{enter}') //writes '2. Remember the human'
        })
        cy.get(':nth-child(5) > .MuiListItemText-root > .MuiTypography-root')
        .then(($text3)=>{
            const type3= $text3.text()
            cy.get('form > :nth-child(2) > .MuiInputBase-root').type(`${type3}`+'{enter}') //writes '3. Behave like you would in real life'
        })
        cy.get(':nth-child(7) > .MuiListItemText-root > .MuiTypography-root')
        .then(($text4)=>{
            const type4= $text4.text()
            cy.get('form > :nth-child(2) > .MuiInputBase-root').type(`${type4}`+'{enter}') //writes '4. search for duplicates before posting'
        })
        cy.get(':nth-child(9) > .MuiListItemText-root > .MuiTypography-root')
        .then(($text5)=>{
            const type5= $text5.text()
            cy.get('form > :nth-child(2) > .MuiInputBase-root').type(`${type5}`) //writes '5. Read the first rule again'
        })
        cy.get('.jss656 > .MuiInputBase-root > .MuiInputBase-input').type('30012345678')
        cy.get('.jss686 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Emumba Pvt. Limited, Korang Road I-10/3 Islamabad.')
        cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('hello there' +'{enter}')
        cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('covid-19' +'{enter}')
        cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('zara hut k' +'{enter}')
        cy.get('.MuiButton-contained').click()
        cy.get('nav > :nth-child(1)').click()
    })
    it('Taking Screenshot',() =>{
        cy.wait(5000)
        cy.get(':nth-child(1) > .MuiPaper-root > .jss796 > .MuiTypography-h5').then(($name)=>{
            const screenshot_name=$name.text()
            cy.screenshot(screenshot_name)
        })
    })
    it ('Logout', ()=>{
        cy.get('nav > :nth-child(3) > .MuiButton-label').click()
        cy.visit('https://emumba-test.herokuapp.com/')
      
    })
        
    
})