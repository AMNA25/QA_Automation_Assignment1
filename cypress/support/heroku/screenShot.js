import screenshot from '../../../pageObjects/herokuapp/screenshot'
export default()=>{
    cy.wait(5000)
        screenshot.takeScreenshot()
        screenshot.clickLogoutButton()
}