import { authConstants } from "../constants/redux"

const initialState = {
    isLogin: false,
    loading: false,
    sucess: false,
    signupSuccess: false,
    error: false,
    user: false,
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