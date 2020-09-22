import sign_up from '../../../pageObjects/herokuapp/sign_up'
export default(a,b,c,d)=>{
    sign_up.typeFirstName(a) 
    sign_up.typeLastName(b) 
    sign_up.typeEmail(c)
    sign_up.typePassword(d) 
    sign_up.typeRetypePassword(d)
    sign_up.clickAlreadyaUser()
}