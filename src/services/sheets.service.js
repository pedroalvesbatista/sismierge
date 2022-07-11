import HttpBackend from "./../config/googleSheets"

const httpBackend= HttpBackend()


export const sheetService = { 
    loadEscopos,
    loadSheet,
    setSubEscopo,
}

function loadEscopos() {
    return httpBackend.get(`planilha`)
}
function loadSheet(id) {
    return httpBackend.get(`planilha/${id}`)
}
function setSubEscopo(data) {
    return httpBackend.post(`planilha`, data)
}