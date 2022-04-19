import { contabilizar } from "../constants/redux"

const initialState = {
  loading: false,
  loadingSave: false,
  loadingPreview: false,
  data: [],
  co2: {percent: 0, value: 0},
  co2t: {percent: 0, value: 0},
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
        // changeTableData: action.payload,
        data: action.payload
      }


    case contabilizar.SET_CO2: 
      return {
        ...state,
        // changeTableData: action.payload,
        co2: action.payload
      }

    case contabilizar.SET_CO2T: 
      return {
        ...state,
        // changeTableData: action.payload,
        co2t: action.payload
      }

      case contabilizar.SET_SAVE_REQUEST: 
      return {
        ...state,
        loadingSave: true
      }

    case contabilizar.SET_SAVE_SUCESS: 
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