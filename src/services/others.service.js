import HttpBackend from "../config/brasilApi"

const httpBackend= HttpBackend()


export const othersService = { 
    loadCep,
}

function loadCep(cep) {
    return httpBackend.get(`cep/v2/${cep}`)
}