class google_result{
    contains_link(link){
        const link1 =cy.contains(link)
        link1.click()
        return this;
    }
}
module.exports=new google_result();