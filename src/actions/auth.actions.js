import { toast } from "react-toastify";
import { authConstants } from "../constants/redux"
import { authService } from "./../services"

export const authActions = {
    authenticate
}

function authenticate (userData, admin){
    const isAdmin= admin ? 'auth/admin' : 'auth' 
    const isUser= admin ? 'auth' : 'auth/admin' 
    const redirect= admin ? '/admin' : '/' 

    return dispatch => {
      dispatch({ 
      type: authConstants.LOGIN_USER_REQUEST
    })

    authService.authenticate(userData)
    .then(response => {
        dispatch({ 
          type: authConstants.LOGIN_USER_SUCCESS,
          payload: response.data
        })
  
        localStorage.setItem(`@sismiegee/${isAdmin}`, JSON.stringify(response.data))
        localStorage.removeItem(`@sismiegee/${isUser}`)
        window.location.replace(`${redirect}`)
    })
    .catch(error => {
        if (error.response.status === 400) {
            toast.error("Identificador ou senha inválida")
        }
      dispatch({ 
        type: authConstants.LOGIN_USER_FAIL,
      })
      console.log(error);
    })
    }
}