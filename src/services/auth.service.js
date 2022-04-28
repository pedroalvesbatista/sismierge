import HttpBackend from "./../config/http"

const httpBackend= HttpBackend()

export const authService = { 
    authenticate
}

function authenticate(dataUser) {
    const { identifier, password } = dataUser
    return httpBackend.post(`auth/local`, {
        identifier,
        password,
      })
}