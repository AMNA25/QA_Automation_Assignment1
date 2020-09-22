const flyer = require("../../pageObjects/herokuapp/flyer")
/// <reference types ="cypress" />
const { range } = require("lodash")
const heroku_visit = require("../../pageObjects/herokuapp/heroku_visit")
const sign_in = require("../../pageObjects/herokuapp/sign_in")
const sign_up = require("../../pageObjects/herokuapp/sign_up")
const screenshot = require("../../pageObjects/herokuapp/screenshot")
const { default: herokuVisit } = require("../support/heroku/herokuVisit")
const { default: herokuSignUp } = require("../support/heroku/herokuSignUp")
const { default: herokuSignIn } = require("../support/heroku/herokuSignIn")

describe('Herokuapp', () => {
  
    it('Sign Up', ()=>{
    cy.fixture('input.json').then((input)=>{
    cy.fixture('castInfo.json').then((info)=>{
    var data=info[4];
    var f_name=data.Name;
    var l_name=data['Screen Name'];

    herokuVisit(input[3].value)
    herokuSignUp(f_name,l_name,input[4].value,input[5].value)
    herokuSignIn(input[4].value,input[5].value)
    //heroku_visit.visit(input[3].value)
    //heroku_visit.clickLoginButton() 
    //sign_in.clickNotaUser() 
    
    /**sign_up.typeFirstName(f_name) 
    sign_up.typeLastName(l_name) 
    sign_up.typeEmail(input[4].value)
    sign_up.typePassword(input[5].value) 
    sign_up.typeRetypePassword(input[5].value) */
    //sign_in.clickSignInButton() //click on Sign up button (It works when a new email address is typed)
    
    
    
        
    //sign_up.clickAlreadyaUser()
    //sign_in.typeEmail(input[4].value)  
    //sign_in.typePassword(input[5].value)  
    //sign_in.clickSignInButton()  

   
        flyer.clickPostFlyerButton()
        flyer.typeHeading()
        var arr1=range(1,9,2)
        flyer.fillDetails(arr1)
        flyer.typePhone(input[6].value)
        flyer.typeAddress(input[7].value)
        flyer.fillTag(input[8].value)
        flyer.fillTag(input[9].value)
        flyer.fillTag(input[10].value)
        flyer.clickPostButton()
        flyer.clickHomeButton()
    
        cy.wait(5000)
        screenshot.takeScreenshot()
        screenshot.clickLogoutButton()
    })})
  
     
    })})
        

