import flyer from '../../../pageObjects/herokuapp/flyer'
export default(arr1=[],b,c,d,e,f)=>{
    flyer.clickPostFlyerButton()
    flyer.typeHeading()
    flyer.fillDetails(arr1)
    flyer.typePhone(b)
    flyer.typeAddress(c)
    flyer.fillTag(d)
    flyer.fillTag(e)
    flyer.fillTag(f)
    flyer.clickPostButton()
    flyer.clickHomeButton()
}