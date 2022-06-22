import HttpBackend from "../config/http"

const httpBackend= HttpBackend()

export const companyService = { 
    getCompanies,
    createCompany,
    getUserCompany,
    updateCompany,
    deleteCompany,

    loadInventories,
    updateInventory,
    createInventory,
    deleteInventory
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

function deleteCompany(id) {
    return httpBackend.delete(`companies/${id}`)
}

function updateCompany(userData, id) {
    return httpBackend.put(`companies/${id}`, {data: userData})
}

function createInventory(userData) {
    return httpBackend.post(`inventariacaos`, {data: userData})
}

function updateInventory(userData, id) {
    return httpBackend.put(`inventariacaos/${id}`, {data: userData})
}

function deleteInventory(id) {
    return httpBackend.delete(`inventariacaos/${id}`)
}

function loadInventories(id_company) {
    return httpBackend.get(`inventariacaos?filters[company][id][$eq]=${id_company}`)
}