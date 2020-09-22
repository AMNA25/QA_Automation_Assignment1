/// <reference types ="cypress" />
import linkPage from '../../pageObjects/afterLife/linkPage';
import afterLifeLinkAndInfo from '../support/gOogle/afterLifeLinkAndInfo';
import goToGoogle from '../support/gOogle/goToGoogle'
import searchAfterLife from '../support/gOogle/searchAfterLife';

describe('After Life', function(){

it ('Search the cast', function(){
    cy.fixture('input.json').then((usersData)=>{
    goToGoogle(usersData[0].value)
    searchAfterLife(usersData[1].value)
    afterLifeLinkAndInfo(usersData[2].value,'See full cast')
    linkPage.object;
    //writeCastInfo()
    })
})
})