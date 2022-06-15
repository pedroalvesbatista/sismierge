import HttpBackend from "./../config/googleSheets"

const httpBackend= HttpBackend()


export const sheetService = { 
    loadEscopos,
    loadSubEscopos,
    setSubEscopo,
}

function loadEscopos() {
    return httpBackend.get(`planilha`)
}
function loadSubEscopos(id) {
    return httpBackend.get(`planilha/${id}`)
}
function setSubEscopo(data) {
    return httpBackend.post(`planilha`, data)
}