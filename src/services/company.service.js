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
    return httpBackend.post(`companies`, {data: userData})
}