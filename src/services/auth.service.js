import HttpBackend from "./../config/http"

const httpBackend= HttpBackend()

const tokenJwt= window.location.pathname.split('/')[2]

export const authService = { 
    authenticate,
    loadUsers,
    getMe,
    editUser,
}

function authenticate(dataUser) {
    const { identifier, password } = dataUser
    return httpBackend.post(`auth/local`, {
        identifier,
        password,
      })
}

function loadUsers() {
    return httpBackend.get(`users`)
}

function editUser(id, userData, ) {
    return httpBackend.put(`users/${id}`, userData, { headers: {"Authorization" : `Bearer ${tokenJwt}`} })
}

function getMe(token) {
    return httpBackend.get(`users/me`, { headers: {"Authorization" : `Bearer ${token}`} })
}