import HttpBackend from "../config/http"

const httpBackend= HttpBackend()

export const colaboradorService = { 
    getColaboradors
}

function getColaboradors({type}) {
    return httpBackend.get(`users?filters[type][$eq]=${type ?? "colaborador"}`)
}