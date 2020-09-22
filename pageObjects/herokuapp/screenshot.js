const flyer = require("./flyer")

class screenshot{
   get flyerTitle(){
    return cy.get(':nth-child(1) > .MuiPaper-root > .jss796 > .MuiTypography-h5')
   }
    takeScreenshot(){
        this.flyerTitle.then((name)=>{
            const screenshot_name=name.text()
            cy.screenshot(screenshot_name)
        })

    }
    get logout(){
       return cy.get('nav > :nth-child(3)')
    }
    clickLogoutButton(){
        this.logout.click()
    }
}
module.exports=new screenshot();