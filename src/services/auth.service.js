import HttpBackend from "./../config/HttpBackend"

const httpBackend= HttpBackend()

export const authService = { 
    submitUser,
    loginUser,
    facebookLogin,
    googleLogin,
    sendForgotPassowrd,
    sendResetPassword,
    authenticate
}

function submitUser(userData) {
    const { email, username, name, password } = userData;

    return httpBackend.post(`/api/users`, {
        email,
        username,
        password,
        name,
    })
}

function loginUser(userData) {
    const { username, password, api } = userData;
    return httpBackend.post(`auth/login`, {
        username,
        password,
        api
    })
}

function facebookLogin(facebookData) {
    return httpBackend.post(`/Auth/accessToken_facebook`, facebookData)
}

function googleLogin(googleData) {
    return httpBackend.post(`/Auth/accessToken_google`, googleData)
}

function sendForgotPassowrd(email) {
    return httpBackend.post(`/password/send_reset_email?email=${email}`)
}

function sendResetPassword(email, password, token) {
    return httpBackend.post(`/password/reset_Password?email=${email}&password=${password}&token=${token}`)
}

function authenticate(email, password) {
    return httpBackend.post(`/Auth/authenticate`, {
        email,
        password,
      })
}