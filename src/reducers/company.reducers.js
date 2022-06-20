import { companyConstants } from "../constants/redux"

const initialState = {
    loading: false,
    loadingCreateCompany: false,
    loadingUpdateCompany: false,
    sucess: false,
    sucessCreateCompany: false,
    sucessUpdateCompany: false,
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
        loadingUpdateCompany: true,
        sucessUpdateCompany: false,
      }
      

    case companyConstants.UPDATE_COMPANY_SUCCESS:
      return {
        ...state,
        loadingUpdateCompany: false,
        sucessUpdateCompany: true,
        newCompany: action.payload,
      }

    case companyConstants.UPDATE_COMPANY_FAIL:
      return {
        ...state,
        loadingUpdateCompany: false,
        error: action.payload
      }
    

    default: 
      return state;
  }
};