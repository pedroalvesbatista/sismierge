import HttpBackend from "../config/http"

const httpBackend= HttpBackend()

export const colaboradorService = { 
    getColaboradors
}

function getColaboradors() {
    return httpBackend.get(`users?filters[type][$eq]=colaborador`)
}