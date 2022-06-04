import { authConstants } from "../constants/redux"

const initialState = {
    isLogin: false,
    loading: false,
    loadingGetUsers: false,
    loadingEditUser: false,
    loadingDeleteUser: false,
    sucess: false,
    sucessGetUsers: false,
    sucessEditUser: false,
    sucessDeleteUser: false,
    sucessLoadUser: false,
    signupSuccess: false,
    error: false,
    user: [],
    myData: [],
    users: [],
    roles:false,
    resetPassToken: "",
    resetPassEmail: "",
    resetPassLoading: false,
    resetPassError: false,
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {

    case authConstants.CREATE_USER_REQUEST:
      return {
        ...state,
        loading: true
      }

    case authConstants.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        signupSuccess: true,
        isLogin: true,
        user: action.payload,
      }

    case authConstants.CREATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case authConstants.LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case authConstants.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        sucess: true,
        isLogin: true,
      }

    case authConstants.LOGIN_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload ,
      }

    case authConstants.LOAD_USERS_REQUEST:
      return {
        ...state,
        loadingGetUsers: true,
      }

    case authConstants.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loadingGetUsers: false,
        users: action.payload,
        sucessGetUsers: true,
      }

    case authConstants.LOAD_USERS_FAIL:
      return {
        ...state,
        loadingGetUsers: false,
        error: action.payload ,
      }

    case authConstants.LOAD_ME_REQUEST:
      return {
        ...state,
        sucess: false,
        loading: true,
        error: false
      }
  
    case authConstants.LOAD_ME_SUCCESS:
      return {
        ...state,
        sucess: true,
        loading: false,
        error: false,
        myData: action.payload
      }
  
    case authConstants.LOAD_ME_FAIL:
      return {
        ...state,
        sucess: false,
        loading: false,
        error: true
      }

    case authConstants.LOAD_USER:
        return {
          ...state,
          sucessLoadUser: true,
        }

    case authConstants.EDIT_USER_REQUEST:
        return {
          ...state,
          loadingEditUser: true,
          sucessEditUser: false
        }
  
    case authConstants.EDIT_USER_SUCCESS:
        return {
          ...state,
          loadingEditUser: false,
          sucessEditUser: true,
        }
  
    case authConstants.EDIT_USER_FAIL:
        return {
          ...state,
          loadingEditUser: false,
          sucessEditUser: false,
          error: action.payload ,
        }
    
    case authConstants.DELETE_USER_REQUEST:
        return {
          ...state,
          loadingDeleteUser: true,
        }
  
    case authConstants.DELETE_USER_SUCCESS:
        return {
          ...state,
          loadingDeleteUser: false,
          sucessDeleteUser: true,
        }
  
    case authConstants.DELETE_USER_FAIL:
        return {
          ...state,
          loadingDeleteUser: false,
          error: action.payload ,
        }
  

    case authConstants.LOAD_ROLES:
        return {
          ...state,
          roles: action.payload ,
        }

    case authConstants.CLEAR_ALL_LOGIN:
    case authConstants.LOGOUT: 
      localStorage.clear();
      return initialState;

    case authConstants.CLEAR_ERRORS:
      return {
        ...state,
        error: false
      }

    case authConstants.ERR_SHORT_PASSWORD: 
      return { 
        ...state,
        error: "SHORT_PASS"
      }

    case authConstants.FORGOT_PASSWORD_REQUEST: 
      return {
        ...state,
        resetPassLoading: true,
      }

    case authConstants.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPassLoading: false,
        resetPassEmail: action.payload,
      }

    case authConstants.FORGOT_PASSWORD_FAIL:
      return {
        ...state,
        resetPassLoading: false,
        resetPassError: true
      }

    case authConstants.SET_RESET_PASS_TOKEN:
      return { 
        ...state,
        resetPassToken: action.payload
      }

    case authConstants.SET_RESET_PASS_EMAIL:
      return {
        ...state,
        resetPassEmail: action.payload
      }
    
    case authConstants.CLEAR_RESET_PASS_TOKEN:
      return {
        ...state,
        resetPassToken: "",
        resetPassEmail: ""
      }

    default: 
      return state;
  }
};