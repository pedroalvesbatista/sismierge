import HttpBackend from "../config/http"

const httpBackend= HttpBackend()



const randUiConvite = (params) => {
    const result= params.split('').sort(function(){return 0.5-Math.random()}).join('').substring(0,100)
    return result
}

export const companyService = { 
    getCompanies,
    createCompany,
    getUserCompany
}

function getCompanies() {
    return httpBackend.get(`companies`)
}
function getUserCompany() {
    return httpBackend.get(`users?filters[type][$eq]=master`)
}

function createCompany(userData) {
    const { name, email } = userData
    const num= "1234567890"
    const letter= "abcdefghijkl"
    const username= randUiConvite(num+letter)
    const password= randUiConvite(email+name+num)
    return httpBackend.post(`auth/local/register`, {
        username,
        name,
        email,
        password,
        type: "master",
        confirmed: true
    })
}