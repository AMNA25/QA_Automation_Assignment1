/// <reference types ="cypress" />
//import {val,val1} from '../integration/readData.spec.js';
describe('Typing the address', function(){

it ('should open the link', function(){
    cy.visit('https://www.google.com') //here comes the value from cell B2
    cy.get('.gLFyf').type('After Life ') // here comes the value from cell B3
    cy.get('.FPdoLc > center > .gNO89b').click()
    //cy.get('[href="https://www.imdb.com/title/tt8398600/"] > .LC20lb').rightclick().contains('Open link in new tab')
    cy.contains('After Life (TV Series 2019– ) - IMDb').click()
    cy.contains('See full cast').click()
})

})

