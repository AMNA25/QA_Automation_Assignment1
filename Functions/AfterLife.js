import linkPage from "../pageObjects/afterLife/linkPage";

export function writeCastInfo(){
   const data= linkPage.object;
   cy.log(data);
    return cy.writeFile('cypress/fixtures/castInfo.json',data);
}
    


