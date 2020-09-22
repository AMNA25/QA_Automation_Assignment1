import heroku_visit from '../../../pageObjects/herokuapp/heroku_visit'
import sign_in from '../../../pageObjects/herokuapp/sign_in'
export default(link)=>{
    heroku_visit.visit(link)
    heroku_visit.clickLoginButton() 
    sign_in.clickNotaUser()
}