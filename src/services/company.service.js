import HttpBackend from "../config/http"

const httpBackend= HttpBackend()

export const companyService = { 
    getCompanies,
    createCompany,
    getUserCompany,
    updateCompany
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

function updateCompany(userData, id) {
    return httpBackend.put(`companies/${id}`, {data: userData})
}