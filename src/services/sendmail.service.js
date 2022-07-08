import Smtp from "../config/smtp"

const smtp= Smtp()

export const mailService = { 
    sendConvite
}

const data = {
    service_id: 'gmailSismierge',
    template_id: 'template_ga5gwjp',
    user_id: 'GH6EmEODF2FFXA2HI',
    template_params: {}
}

function sendConvite(userData) {
    const template= {
        'subject': 'Bem vindo a Sismierge',
        'name': userData.nome,
        'email': userData.email,
        'for': userData.email,
        'url':  `https://sismierge.vercel.app/register/${userData.id_convite}`
    }
    const sendData= {...data, template_params: template}
    return smtp.post(`send`, sendData)
}