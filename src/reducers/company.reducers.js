import { companyConstants } from "../constants/redux"

const initialState = {
    loading: false,
    loadingCreateCompany: false,
    sucess: false,
    sucessCreateCompany: false,
    error: false,
    companies: [],
    company: [],
    newCompany: [],
}

export const companyReducer = (state = initialState, action) => {
  switch(action.type) {

    case companyConstants.LOAD_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      }
      

    case companyConstants.LOAD_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: action.payload,
      }

    case companyConstants.LOAD_COMPANY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    
    case companyConstants.CREATE_COMPANY_REQUEST:
      return {
        ...state,
        loadingCreateCompany: true,
      }
      

    case companyConstants.CREATE_COMPANY_SUCCESS:
      return {
        ...state,
        loadingCreateCompany: false,
        sucessCreateCompany: true,
        company: action.payload,
      }

    case companyConstants.CREATE_COMPANY_FAIL:
      return {
        ...state,
        loadingCreateCompany: false,
        error: action.payload
      }

    case companyConstants.UPDATE_COMPANY_REQUEST:
      return {
        ...state,
        loadingCreateCompany: true,
        sucessCreateCompany: false,
      }
      

    case companyConstants.UPDATE_COMPANY_SUCCESS:
      return {
        ...state,
        loadingCreateCompany: false,
        sucessCreateCompany: true,
        newCompany: action.payload,
      }

    case companyConstants.UPDATE_COMPANY_FAIL:
      return {
        ...state,
        loadingCreateCompany: false,
        error: action.payload
      }
    

    default: 
      return state;
  }
};