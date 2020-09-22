class sign_in{
    get not_a_user(){
        return cy.get('form > .MuiBox-root > .MuiTypography-root')
    }
    get signInButton(){
        return  cy.get('.MuiBox-root > .MuiButtonBase-root')
    }
    get email(){
        return cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input')
    }
    get password(){
        return cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input')
    }
    clickNotaUser(){
       this.not_a_user.click()
    }
    clickSignInButton(){
        this.signInButton.click()
    }
    typeEmail(emaiL){
        this.email.type(emaiL)
    }
    typePassword(pass){
        this.password.type(pass)
    }
}
module.exports=new sign_in();