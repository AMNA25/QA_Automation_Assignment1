import google_result from '../../../pageObjects/afterLife/google_result'
import linkPage from '../../../pageObjects/afterLife/linkPage'
export default(value1,value2)=>{
    google_result.contains_link(value1)   // After Life (TV Series 2019– ) - IMDb 
    linkPage.searchKeyword(value2)
}