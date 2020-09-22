/// <reference types ="cypress" />
//NOTE: Change the email address in * positions before running the test
describe('Herokuapp backend feasibility test', () => {

//GET response 
it('This test shows GET response', ()=>{
    cy.request('GET','https://emumba-test.herokuapp.com/trend')
    .then((response)=>{
        expect(response.status).to.eq(201)
        expect(response.duration).to.be.lessThan(1000)
        expect(parseInt(response.headers['content-length'])).to.be.lessThan(2048)
    })
})

//POST response of 'https://emumba-test.herokuapp.com/user'
it('This test shows POST request of https://emumba-test.herokuapp.com/user',()=>{
    cy
    .request('POST', 'https://emumba-test.herokuapp.com/user', {    //Request Payload 
        first_name: 'Ali',
        last_name:'Ahmad',
        email:'ali.ahmad46@gmail.com',  // *
        password:'12345',
        confirm_password:'12345'
     })
    .then((response) => {                                          //Response Contain
      expect(response.status).to.eq(200)
      expect(response.duration).to.be.lessThan(1000)
      expect(parseInt(response.headers['content-length'])).to.be.lessThan(2048)
      expect(response.body).to.have.property('first_name') 
      expect(response.body).to.have.property('last_name')
      expect(response.body).to.have.property('plan')
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('access_token')
      expect(response.body).to.have.property('refresh_token')
    })
})

// POST response of 'https://emumba-test.herokuapp.com/user/login'
it('This test shows POST request of https://emumba-test.herokuapp.com/user/login', ()=>{
    cy
    .request('POST', 'https://emumba-test.herokuapp.com/user/login',{   //Request Payload
        email:'ali.ahmad46@gmail.com',  // *
        password:'12345'
    })
    .then((response)=>{                                                 //Response Contain
        expect(response.status).to.eq(200)
        expect(response.duration).to.be.lessThan(2000) 
        expect(parseInt(response.headers['content-length'])).to.be.lessThan(2048)
        expect(response.body).to.have.property('email')
        expect(response.body).to.have.property('first_name')
        expect(response.body).to.have.property('last_name')
        expect(response.body).to.have.property('plan')
        expect(response.body).to.have.property('id')
    })
})

})