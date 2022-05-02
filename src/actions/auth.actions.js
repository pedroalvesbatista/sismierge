import { toast } from "react-toastify";
import { authConstants } from "../constants/redux"
import { authService } from "./../services"

export const authActions = {
  authenticate,
  loadUsers,
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
        console.log(response.data);
        
        localStorage.removeItem(`@sismiegee/${isUser}`)

        if (response.data.user.type === "colaborador") {
          localStorage.setItem(`@sismiegee/auth/admin`, JSON.stringify(response.data))
          window.location.replace(`/admin`)
        } else {
          localStorage.setItem(`@sismiegee/auth`, JSON.stringify(response.data))
          window.location.replace(`/`)
        }
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

function loadUsers (){
  return dispatch => {
  //   dispatch({ 
  //   type: authConstants.LOAD_USERS_REQUEST
  // })

  authService.loadUsers()
  .then(response => {
      dispatch({ 
        type: authConstants.LOAD_USERS_SUCCESS,
        payload: response.data
      })
  })
  .catch(error => {
    dispatch({ 
      type: authConstants.LOAD_USERS_FAIL,
    })
    console.log(error);
  })
  }
}