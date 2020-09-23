/// <reference types ="cypress" />
const { range } = require("lodash")
import herokuVisit from '../support/heroku/herokuVisit'
import herokuSignUp  from '../support/heroku/herokuSignUp'
import herokuSignIn from '../support/heroku/herokuSignIn'
import postFlyer from '../support/heroku/postFlyer'
import screenShot from '../support/heroku/screenShot'

describe('Herokuapp', () => {
  
    it('Sign Up', ()=>{
    cy.fixture('input.json').then((input)=>{
    cy.fixture('castInfo.json').then((info)=>{
    var data=info[4];
    var f_name=data.Name;
    var l_name=data['Screen Name'];

    herokuVisit(input[3].value)
    herokuSignUp(f_name,l_name,input[4].value,input[5].value,input[5].value)
    herokuSignIn(input[4].value,input[5].value)
    
    var arr1=range(1,9,2)
    postFlyer(arr1,input[6].value,input[7].value,input[8].value,input[9].value,input[10].value)
    screenShot()
    })
})
  })
})
        

