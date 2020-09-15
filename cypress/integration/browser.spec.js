/// <reference types ="cypress" />

const { range } = require("lodash")


describe('Typing the address', function(){

it ('should open the link', function(){
    cy.task('g_value').then((g_value)=>{
    cy.visit(g_value)}) //https://www.google.com
    cy.task('s_value').then((s_value)=>{
    cy.get('.gLFyf').type(s_value)}) // After Life
    cy.get('.FPdoLc > center > .gNO89b').click()
    cy.task('l_value').then((l_value)=>{
    cy.contains(l_value).click() })  // After Life (TV Series 2019– ) - IMDb 
    cy.contains('See full cast').click()
})

it ('cast members info', ()=>{
          var arr1= range(2,114,2)
          var arr2= range(117,129,2)
          var names=[]
          var screenNames=[]
          var appearance=[]
        cy.wrap(arr1).each((index)=>{
            cy.get(`.cast_list > tbody > :nth-child(${index}) > :nth-child(2)`)
            .then((cast)=>{
                const cast1=cast.text().split('\n')
                cy.log(cast1)
               names.push(cast1)
          })})
           cy.wrap(arr1).each((index)=>{
            cy.get(`#fullcredits_content > table.cast_list > tbody > tr:nth-child(${index}) > td.character > a:nth-child(1)`)
            .then((cast)=>{
                const cast1=cast.text()
               screenNames.push(cast1)
          })})
       cy.wrap(arr1).each((index)=>{
            cy.get(`#fullcredits_content > table.cast_list > tbody > tr:nth-child(${index}) > td.character > a.toggle-episodes`)
            .then((cast)=>{
                const cast1=cast.text()
                appearance.push(cast1)
        })})
        cy.wrap(arr2).each((index)=>{
            cy.get(`.cast_list > tbody > :nth-child(${index}) > :nth-child(2)`)
            .then((cast)=>{
                const cast1=cast.text().split('\n')
               names.push(cast1)
          })})
          cy.wrap(arr2).each((index)=>{
            cy.get(`#fullcredits_content > table.cast_list > tbody > tr:nth-child(${index}) > td.character > a:nth-child(1)`)
            .then((cast)=>{
                const cast1=cast.text()
               screenNames.push(cast1)
          })})
          cy.wrap(arr2).each((index)=>{
            cy.get(`#fullcredits_content > table.cast_list > tbody > tr:nth-child(${index}) > td.character > a.toggle-episodes`)
            .then((cast)=>{
                const cast1=cast.text()
                appearance.push(cast1)
        })})
                var data=[]
               cy.wrap(names).each(($el, index)=>{
                    data.push({'Name':names[index][1], 'Screen Name':screenNames[index], 'Appearance':appearance[index]})
               })
               cy.writeFile('thing.json', data);
           

        })
        })
        


