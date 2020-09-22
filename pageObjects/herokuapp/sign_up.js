class sign_up{
    get f_name(){
        return cy.get('.jss418 > .MuiInputBase-root > .MuiInputBase-input')
    }
    get l_name(){
        return cy.get('.jss422 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input')
    }
    get email(){
        return cy.get('form > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input')
    }
    get password(){
        return cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input')
    }
    get retype_password(){
        return cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input')
    }
    get signUp(){
        return cy.get('.jss423 > .MuiButtonBase-root')
    }
    get already_a_user(){
        return cy.get('.jss423 > .MuiTypography-root')
    }
    typeFirstName(fname){
        this.f_name.type(fname)
    }
    typeLastName(lname){
        this.l_name.type(lname)
    }
    typeEmail(emaiL){
        this.email.type(emaiL)
    }
    typePassword(pass){
        this.password.type(pass)
    }
    typeRetypePassword(rPass){
        this.retype_password.type(rPass)
    }
    clickSignUpButton(){
        this.signUp().click()
    }
    clickAlreadyaUser(){
        this.already_a_user.click()
    }
}module.exports=new sign_up();