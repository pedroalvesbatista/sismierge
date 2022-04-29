import HttpBackend from "../config/http"

const httpBackend= HttpBackend()

const randUiConvite = (params) => {
    const result= params.split('').sort(function(){return 0.5-Math.random()}).join('').substring(0,100)
    return result
}

export const conviteService = { 
    createConviteCompany,
    // deleteConviteCompany,
    loadConviteCompany,
}

function loadConviteCompany() {
    return httpBackend.get(`convites`)
}

function createConviteCompany(conviteData) {
    const num= "1234567890"
    const junt= ''.concat(conviteData.email, conviteData.nome, num)
    const randId= randUiConvite(junt)
    const dataSend= {
        id_convite: conviteData.id+randId,
        company: conviteData.attributes.id
    }
    return httpBackend.post(`convites`, {data: dataSend})
}