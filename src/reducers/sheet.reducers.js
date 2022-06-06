import { sheetConstants } from "../constants/redux"

const initialState = {
    loadingEscopos: false,
    sucessEscopos: false,
    errorEscopos: false,
    escopoSheetData: [],
    dataEscopo: [],
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

    case sheetConstants.SET_DATA_ESCOPO:
      return {
        ...state,
        dataEscopo: action.payload,
      }

    default: 
      return state;
  }
};