/// <reference types ="cypress" />
export default()=>{
  var names=[]
  var screenNames=[]
  var appearance=[]
  cy.get('.cast_list > tbody > :nth-child(n) > :nth-child(2)')
  .then((cast)=>{
    const cast1=cast.text().split('\n')
    cy.log(cast1)
   names.push(cast1)
  })
  cy.get('#fullcredits_content > table.cast_list > tbody > tr:nth-child(n) > td.character > a:nth-child(1)')
  .then((cast)=>{
    const cast1=cast.text().split('\n')
   screenNames.push(cast1)
})

  cy.get('#fullcredits_content > table.cast_list > tbody > tr:nth-child(n) > td.character > a.toggle-episodes')
  .then((cast)=>{
    const cast1=cast.text()
    appearance.push(cast1)
})
    
var data=[]
cy.wrap(names).each(($el, index)=>{
data.push({Name:$el, 'Screen Name':screenNames[index], 'Appearance':appearance[index]})
})
cy.writeFile('cypress/fixtures/castInfo.json',data);
}
    


