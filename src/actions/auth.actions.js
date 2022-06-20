import { toast } from "react-toastify";
import { authConstants, mailConstants } from "../constants/redux"
import { authService, mailService } from "./../services"

export const authActions = {
  createUser,
  authenticate,
  loadUsers,
  editUser,
  loadRoles,
  deleteUser,
  getUser,
  getMe,
  sendConvite
}

function sendConvite (userData){
  console.log("Entrou");

  return dispatch => {
      dispatch({ 
        type: mailConstants.SEND_CONVITE_REQUEST
      })

      mailService.sendConvite(userData)
        .then(response => {
          console.log("Enviado deu certo");
            dispatch({ 
                type: mailConstants.SEND_CONVITE_SUCCESS,
                payload: response.data
            })

            toast.success(`Link foi enviado com sucesso para ${userData.email}`)
            
        })
        .catch(error => {
            dispatch({ 
                type: mailConstants.SEND_CONVITE_FAIL,
            })
            console.log(error);
        })
  }
}

function createUser (userData){

  return dispatch => {
    dispatch({ 
    type: authConstants.CREATE_USER_REQUEST
  })

  authService.createUser(userData)
  .then(response => {
    dispatch({ 
      type: authConstants.CREATE_USER_SUCCESS,
      payload: response.data
    })
      
  })
  .catch(error => {
    dispatch({ 
      type: authConstants.CREATE_USER_FAIL,
    })
    if (error.response.data.error.message === "Email is already taken") {
      toast.error("O e-mail já foi usado")
    }
    console.log(error);
  })
  }
}

function authenticate (userData, admin){

    return dispatch => {
      dispatch({ 
      type: authConstants.LOGIN_USER_REQUEST
    })

    authService.authenticate(userData)
    .then(response => {
        authService.getMe(response.data.jwt)
        .then(res => {
          dispatch({ 
            type: authConstants.LOGIN_USER_SUCCESS,
            payload: res.data
          })

          if (res.data.role.type === "authenticated") {
            localStorage.setItem(`@sismiegee/auth/admin`, JSON.stringify({ jwt: response.data.jwt,  user: res.data}))
            window.location.replace(`/admin`)
          } else {
            localStorage.setItem(`@sismiegee/auth`, JSON.stringify({ jwt: response.data.jwt,  user: res.data}))
            window.location.replace(`/`)
          }
        })
        
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
  const storage= JSON.parse(localStorage.getItem("@sismiegee/auth/admin")).user
  return dispatch => {
  //   dispatch({ 
  //   type: authConstants.LOAD_USERS_REQUEST
  // })

  authService.loadUsers()
  .then(response => {
    const filterUserData= response.data.filter(i => i.id !== storage.id)
    // console.log(filterUserData);
      dispatch({ 
        type: authConstants.LOAD_USERS_SUCCESS,
        payload: filterUserData
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

function getUser (){
  const storage= JSON.parse(localStorage.getItem("@sismiegee/auth/admin")).user
  return dispatch => {

  authService.loadUsers()
  .then(response => {
    const filterUserData= response.data.filter(i => i.id !== storage.id)
    // console.log(filterUserData);
      dispatch({ 
        type: authConstants.LOAD_USER,
        payload: filterUserData
      })
  })
  .catch(error => {
    console.log(error);
  })
  }
}

function loadRoles (){
  return dispatch => {
  //   dispatch({ 
  //   type: authConstants.LOAD_USERS_REQUEST
  // })

  authService.loadRoles()
    .then(response => {
      dispatch({ 
        type: authConstants.LOAD_ROLES,
        payload: response.data.roles
      })
    })
    .catch(error => {
      console.log(error);
    })
  }
}

function getMe (){
  const token= window.location.pathname.split('/')[2]
  return dispatch => {
    dispatch({ 
    type: authConstants.LOAD_ME_REQUEST
  })

  authService.getMe(token)
    .then(response => {
      const typeUser= response.data.role.type === "authenticated" ? "auth/admin" : "auth"
      localStorage.setItem(`@sismiegee/${typeUser}`, JSON.stringify({ jwt: token,  user: response.data }))

      dispatch({ 
        type: authConstants.LOAD_ME_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      dispatch({ 
        type: authConstants.LOAD_ME_FAIL
      })
      console.log(error);
    })
  }
}

function editUser (id, userData){

  return dispatch => {
    dispatch({ 
    type: authConstants.EDIT_USER_REQUEST
  })

  authService.editUser(id, userData)
    .then(response => {

      dispatch({ 
        type: authConstants.EDIT_USER_SUCCESS,
        payload: response.data
      })
        
    })
    .catch(error => {
      dispatch({ 
        type: authConstants.EDIT_USER_FAIL,
      })
      if (error.response.data.error.message === "Email is already taken") {
        toast.error("O e-mail já foi cadastrado")
      }
      else if (error.response.data.error.message === "password must be at least 1 characters") {
        toast.warn("A senha deve ter pelo menos 1 caractere")
      }else {
        toast.error("Algo deu errado")
      }
      console.log(error);
    })
  }
}

function deleteUser (id){

  return dispatch => {
    dispatch({ 
    type: authConstants.DELETE_USER_REQUEST
  })

  authService.deleteUser(id)
  .then(response => {

    dispatch({ 
      type: authConstants.DELETE_USER_SUCCESS,
      payload: response.data
    })
      
  })
  .catch(error => {
    dispatch({ 
      type: authConstants.DELETE_USER_FAIL,
    })
    console.log(error);
  })
  }
}
