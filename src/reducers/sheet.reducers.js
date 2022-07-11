import { sheetConstants } from "../constants/redux"

const initialState = {
    loadingEscopos: false,
    sucessEscopos: false,
    loadingCreateSubEscopo: false,
    sucessCreateSubEscopo: false,
    errorCreateSubEscopo: false,
    loadingResumo: false,
    sucessResumo: false,
    errorResumo: false,
    loadingSubEscopo: false,
    sucessSubEscopo: false,
    errorEscopos: false,
    errorSubEscopo: false,
    escopoSheetData: [],
    dataEscopo: [],
    dataResumo: [],
    dataSubEscopo: []
}

export const escoposReducer = (state = initialState, action) => {
  switch(action.type) {

    case sheetConstants.LOAD_SHEET_REQUEST:
      return {
        ...state,
        loadingEscopos: true,
        sucessEscopos: false,
        errorEscopos: false
      }
      

    case sheetConstants.LOAD_SHEET_SUCCESS:
      return {
        ...state,
        loadingEscopos: false,
        sucessEscopos: true,
        escopoSheetData: action.payload,
      }

    case sheetConstants.LOAD_SHEET_FAIL:
      return {
        ...state,
        loadingEscopos: false,
        sucessEscopos: false,
        errorEscopos: action.payload
      }

    case sheetConstants.LOAD_SUBESCOPO_REQUEST:
      return {
        ...state,
        loadingSubEscopo: true,
        sucessSubEscopo: false,
        errorSubEscopo: false
      }
      

    case sheetConstants.LOAD_SUBESCOPO_SUCCESS:
      return {
        ...state,
        loadingSubEscopo: false,
        sucessSubEscopo: true,
        dataSubEscopo: action.payload,
      }

    case sheetConstants.LOAD_SUBESCOPO_FAIL:
      return {
        ...state,
        loadingSubEscopo: false,
        sucessSubEscopo: false,
        errorSubEscopo: action.payload
      }

    case sheetConstants.LOAD_RESUMO_REQUEST:
      return {
        ...state,
        loadingResumo: true,
        sucessResumo: false,
        errorResumo: false
      }
      

    case sheetConstants.LOAD_RESUMO_SUCCESS:
      return {
        ...state,
        loadingResumo: false,
        sucessResumo: true,
        dataResumo: action.payload,
      }

    case sheetConstants.LOAD_RESUMO_FAIL:
      return {
        ...state,
        loadingResumo: false,
        sucessResumo: false,
        errorResumo: action.payload
      }
    
    case sheetConstants.SET_SUBESCOPO_REQUEST:
      return {
        ...state,
        loadingCreateSubEscopo: true,
        sucessCreateSubEscopo: false,
        errorCreateSubEscopo: false
      }
      

    case sheetConstants.SET_SUBESCOPO_SUCCESS:
      return {
        ...state,
        loadingCreateSubEscopo: false,
        sucessCreateSubEscopo: true,
        errorCreateSubEscopo: false
      }

    case sheetConstants.SET_SUBESCOPO_FAIL:
      return {
        ...state,
        loadingCreateSubEscopo: false,
        sucessCreateSubEscopo: false,
        errorCreateSubEscopo: true
      }
  

    case sheetConstants.SET_DATA_ESCOPO:
      return {
        ...state,
        dataEscopo: action.payload,
      }

    default: 
      return state;
  }
};