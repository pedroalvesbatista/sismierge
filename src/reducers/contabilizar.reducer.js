import { contabilizar } from "../constants/redux"

const initialState = {
  loading: false,
  loadingSave: false,
  loadingPreview: false,
  data: [],
  changeTableData: [],
  sucess: false,
  sucessSave: false,
  sucessPreview: false,
  error: false,
  errorSave: false,
  errorPreview: false
}

export const contabilizarReducer = (state = initialState, action) => {
  switch(action.type) {

    case contabilizar.GET_DATA_REQUEST: 
      return {
        ...state,
        loading: true
      }

    case contabilizar.GET_DATA_SUCESS: 
      return {
        ...state,
        loading: false,
        sucess: true,
        data: action.payload
      }

    case contabilizar.GET_DATA_FAIL: 
      return {
        ...state,
        loading: false,
        error: true,
        sucess: false
      }
    
    case contabilizar.SET_DATA: 
      return {
        ...state,
        changeTableData: action.payload
      }

      case contabilizar.SET_SAVE_REQUEST: 
      return {
        ...state,
        loadingSave: true
      }

    case contabilizar.GET_DATA_SUCESS: 
      return {
        ...state,
        loadingSave: false,
        sucessSave: true,
      }

    case contabilizar.SET_SAVE_FAIL: 
      return {
        ...state,
        loadingSave: false,
        errorSave: true,
        sucessSave: false
      }
    
      case contabilizar.GET_DATA_FAIL: 
      return {
        ...state,
        loadingPreview: true,
      }

    case contabilizar.SET_PREVIEW_SUCESS: 
      return {
        ...state,
        loadingPreview: false,
        sucessPreview: true,
      }

    case contabilizar.SET_PREVIEW_FAIL: 
      return {
        ...state,
        loadingPreview: false,
        errorPreview: true,
        sucessPreview: false
      }
      
    default: 
      return state;
  }
};