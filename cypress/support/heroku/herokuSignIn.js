import sign_in from '../../../pageObjects/herokuapp/sign_in'
export default(a,b)=>{
    sign_in.typeEmail(a)  
    sign_in.typePassword(b)  
    sign_in.clickSignInButton() 
}