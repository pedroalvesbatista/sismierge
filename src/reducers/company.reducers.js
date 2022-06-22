import { companyConstants } from "../constants/redux"

const initialState = {
    loading: false,
    loadingCreateCompany: false,
    loadingUpdateCompany: false,
    sucessCompany: false,
    sucessCreateCompany: false,
    sucessUpdateCompany: false,
    error: false,
    companies: null,
    company: [],
    newCompany: [],

    loadingInventory: false,
    sucessInventory: false,
    errorInventory: false,
    inventories: [],
    loadingCreateInventory: false,
    sucessCreateInventory: false,
    errorCreateInventory: false,
    newInventory: []
}

export const companyReducer = (state = initialState, action) => {
  switch(action.type) {

    case companyConstants.LOAD_COMPANY_REQUEST:
      return {
        ...state,
        sucessCompany: false,
        loading: true,
      }
      

    case companyConstants.LOAD_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        sucessCompany: true,
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

    case companyConstants.CLEAR_COMPANY:
      return {
        ...state,
        loading: false,
        loadingCreateCompany: false,
        loadingUpdateCompany: false,
        sucessCompany: false,
        sucessCreateCompany: false,
        sucessUpdateCompany: false,
        error: false,
      }

    
    case companyConstants.LOAD_INVENTORY_REQUEST:
      return {
        ...state,
        loadingInventory: true,
        sucessInventory: false,
        errorInventory: false,
      }
      

    case companyConstants.LOAD_INVENTORY_SUCCESS:
      return {
        ...state,
        loadingInventory: false,
        sucessInventory: true,
        inventories: action.payload,
      }

    case companyConstants.LOAD_INVENTORY_FAIL:
      return {
        ...state,
        loadingInventory: false,
        errorInventory: true,
      }
    
    case companyConstants.CREATE_INVENTORY_REQUEST:
      return {
        ...state,
        loadingCreateInventory: true,
      }
      

    case companyConstants.CREATE_INVENTORY_SUCCESS:
      return {
        ...state,
        loadingCreateInventory: false,
        sucessCreateInventory: true,
        newInventory: action.payload,
      }

    case companyConstants.CREATE_INVENTORY_FAIL:
      return {
        ...state,
        loadingCreateInventory: false,
        errorCreateInventory: true
      }

    case companyConstants.CLEAR_INVENTORY:
      return {
        ...state,
        loadingCreateInventory: false,
        errorCreateInventory: false,
        sucessCreateInventory: false
      }

    default: 
      return state;
  }
};