/// <reference types ="cypress" />

const { range } = require("lodash")


describe('After Life', function(){

it ('Search the cast', function(){
    cy.fixture('input.json').then((usersData)=>{
    cy.visit(usersData[0].value) //https://www.google.com
    cy.get('.gLFyf').type(usersData[1].value) // After Life
    cy.get('.FPdoLc > center > .gNO89b').click()
    cy.contains(usersData[2].value).click()   // After Life (TV Series 2019– ) - IMDb 
    cy.contains('See full cast').click()
}) })
it ('cast members info', ()=>{
    const texts=[]
        cy.get('.cast_list > tbody > :nth-child(n) > :nth-child(2)').each(($el) => {
            texts.push($el.text().split('\n'));
        })
       
const texts1=[]

//Iterates over each cast member name in the list and pushes names in the array
cy.get(`#fullcredits_content > table.cast_list > tbody > tr:nth-child(n) > td.character > a:nth-child(1)`).each(($el) => {
    texts1.push($el.text());
})

    cy.get(`#fullcredits_content > table.cast_list > tbody > tr:nth-child(n) > td.character > a:nth-child(1)`).each(($el) => {
        texts1.push($el.text());
    })
const texts2=[]
cy.get('#fullcredits_content > table.cast_list > tbody > tr:nth-child(n) > td.character > a.toggle-episodes').each(($el) => {
    texts2.push($el.text());
})
var data=[]
cy.wrap(texts).each(($el, index)=>{
     data.push({'Name':texts[index][1], 'Screen Name':texts1[index], 'Appearance':texts2[index]})
})
cy.writeFile('cypress/fixtures/castInfo.json', data);
})})
