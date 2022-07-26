import HttpBackend from "./../config/googleSheets"

const httpBackend= HttpBackend()


export const sheetService = { 
    loadEscopos,
    loadSheet,
    setSubEscopo,
    loadResultSheet
}

function loadEscopos() {
    return httpBackend.get(`planilha`)
}

function loadSheet(id) {
    return httpBackend.get(`planilha/${id}`)
}

function loadResultSheet(range) {
    return httpBackend.get(`planilha/range/${range}`)
}

function setSubEscopo(data) {
    return httpBackend.post(`planilha`, data)
}