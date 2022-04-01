import { authConstants } from "../constants/redux"
import { authService } from "./../services"

export const authActions = {
  closeModal,
  changeContent,
  oepnModal,
  submitUser,
  loginUser,
  facebookLogin,
  googleLogin,
  clearAll,
  loadUser,
  logout,
  toggleDropdownMenu,
  clearErrors,
  sendForgotPassowrd,
  setPassToken,
  setPassEmail,
  clearForgotPassInfo,
  sendResetPassword,
}

function closeModal() {
  return dispatch => {
    dispatch({
    type: authConstants.TOGGLE_OPEN_MODAL,
    payload: false
  })
  }
}

function changeContent(contentDisplay){
  return dispatch => {
    dispatch({
    type: authConstants.SET_CONTENT_MODAL,
    payload: contentDisplay
  })
  }
}

function oepnModal(contentDisplay){
  return dispatch => {
    dispatch({
    type: authConstants.SET_CONTENT_MODAL,
    payload: contentDisplay
  })

  dispatch({
    type: authConstants.TOGGLE_OPEN_MODAL,
    payload: true
  })
  }
}

function submitUser(userData){

    return dispatch => {
      if (userData.password.length > 6) {
      dispatch({ 
        type: authConstants.CREATE_USER_REQUEST
      })
  
      authService.submitUser(userData)
      .then((response) => {
          dispatch({ 
            type: authConstants.CREATE_USER_SUCCESS,
            payload: response.data
          })
    
          localStorage.setItem("@investpage/auth", JSON.stringify(response.data))
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({ 
          type: authConstants.CREATE_USER_FAIL,
          payload: err.response.data.message
        })
      })

    } else {
      dispatch({ 
        type: authConstants.ERR_SHORT_PASSWORD
      })
    }
    }
}

function loginUser (userData){

    return dispatch => {
      dispatch({ 
      type: authConstants.LOGIN_USER_REQUEST
    })

    authService.loginUser(userData)
    .then(response => {
      if (response.status == 200) {
        dispatch({ 
          type: authConstants.LOGIN_USER_SUCCESS,
          payload: response.data
        })
  
        localStorage.setItem("@investpage/auth", JSON.stringify(response.data))
      } else {
        dispatch({ 
          type: authConstants.LOGIN_USER_FAIL,
          payload: response
        })
      }
    })
    .catch(error => {
      dispatch({ 
        type: authConstants.LOGIN_USER_FAIL,
        payload: "EMAIL_PASS_MISSMATCH"
      })
      console.log(error);
    })
    }
}

function facebookLogin(facebookData) {
  return dispatch => {
    dispatch({
      type: authConstants.FACEBOOK_LOGIN_REQUEST,
    })

    authService.facebookLogin(facebookData)
    .then((response) => {
      if (response.status == 200) {
        dispatch({ 
          type: authConstants.LOGIN_USER_SUCCESS,
          payload: response.data
        })
  
        localStorage.setItem("@investpage/auth", JSON.stringify(response.data))
      } else {
        dispatch({ 
          type: authConstants.LOGIN_USER_FAIL,
          payload: response
        })
      }
    })

    .catch((err) =>{
      console.log(err);
      dispatch({ 
        type: authConstants.LOGIN_USER_FAIL,
      })
    })
  }
}

function googleLogin(googleData) {

  return dispatch => {
    dispatch({ 
    type: authConstants.GOOGLE_LOGIN_REQUEST
  })

  authService.googleLogin(googleData)
  .then((response) => {
    if (response.status === 200) {
      dispatch({ 
        type: authConstants.LOGIN_USER_SUCCESS,
        payload: response.data
      })

      localStorage.setItem("@investpage/auth", JSON.stringify(response.data))
    } else {
        dispatch({ 
          type: authConstants.LOGIN_USER_FAIL,
          payload: response
        })
    }
  })
  .catch((err) => {
    console.log(err);
    dispatch({ 
      type: authConstants.GOOGLE_LOGIN_FAIL,
    })
  })
  }
}

function clearAll (){
  return dispatch => {
    dispatch({
    type: authConstants.CLEAR_ALL_LOGIN
  })
  }
}

function loadUser (user){
  return dispatch => {
    dispatch({
    type: authConstants.LOAD_USER,
    payload: user
  })
  }
}

function logout (){
  return dispatch => {
    dispatch({
    type: authConstants.LOGOUT
  })
  }
}

function toggleDropdownMenu (value){
  return dispatch => {
    dispatch({
    type: authConstants.TOGGLE_DROPDOW_USER,
    payload: value
  })
  }
}

function clearErrors (){
  return dispatch => {
    dispatch({
    type: authConstants.CLEAR_ERRORS
  })
  }
}

function sendForgotPassowrd(email) {
  return dispatch => {
    authService.sendForgotPassowrd(email)
  .then(() => {
    dispatch({
      type: authConstants.FORGOT_PASSWORD_SUCCESS,
      payload: email
    })
  })
  .catch(err => {
    console.log(err)
    dispatch({
      type: authConstants.FORGOT_PASSWORD_FAIL,
    })
  })
  }
}

function setPassToken (token){
  return dispatch => {
    dispatch({
    type: authConstants.SET_RESET_PASS_TOKEN,
    payload: token,
  })
  }
}

function setPassEmail (email){
  return dispatch => {
    dispatch({
    type: authConstants.SET_RESET_PASS_EMAIL,
    payload: email
  })
  }
}

function clearForgotPassInfo (){
  return dispatch => {
    dispatch({
    type: authConstants.CLEAR_RESET_PASS_TOKEN,
  })
  }
}

function sendResetPassword(email, password, token) {
  return dispatch => {
    dispatch({
    type: authConstants.FORGOT_PASSWORD_REQUEST
  })

  authService.sendResetPassword(email, password, token)
  .then((response) => {
    if (response.status === 200) {
      authService.authenticate(email, password)
      .then((authResponse) => {
        if (authResponse.status === 200) {
          dispatch({ 
            type: authConstants.LOGIN_USER_SUCCESS,
            payload: authResponse.data
          })
    
          localStorage.setItem("@investpage/auth", JSON.stringify(response.data))
        }
      })
      .catch((err) => {
        console.log(err);
      })
    } else {
      dispatch({
        type: authConstants.FORGOT_PASSWORD_FAIL
      })
    }
  })

  .catch ((err) => {
    console.log(err);
    dispatch({
      type: authConstants.FORGOT_PASSWORD_FAIL
    })
  })
  }
}