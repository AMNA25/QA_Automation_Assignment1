class heroku_visit{
    visit(url){
       cy.visit(url)
    }
    get login(){
       return cy.get('nav > :nth-child(3) > .MuiButton-label')
    }
   clickLoginButton(){
        this.login.click()
    }
}
module.exports=new heroku_visit();