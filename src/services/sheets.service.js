import HttpBackend from "./../config/googleSheets"

const httpBackend= HttpBackend()


export const sheetService = { 
    loadEscopos
}

function loadEscopos() {
    return httpBackend.get(`planilha`)
}