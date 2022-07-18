import { others } from "../constants/redux"


const localStorage = JSON.parse(window.localStorage.getItem("@sismierge/escopo1/combu_estac"))

const initialState = {
  titlePage: null,
  optionSelect: '',
  otherOptionSelect: '',
  isOpenModal: false,
  isCloseMenu: false,
  displayModal: null,
  dataModal: null,
  loadingCep: false,
  sucessCep: false,
  dataCep: null, 
  initialItemData: localStorage ? localStorage : []
}

export const othersReducer = (state = initialState, action) => {
  switch(action.type) {

    case others.SET_INITIAL_STATE: 
      return {
        ...state,
        initialItemData: action.payload
      }

    case others.CLOSE_MENU: 
      return {
        ...state,
        isCloseMenu: action.payload
      }

      case others.CLEAN_INITIAL_STATE: 
      return {
        ...state,
        initialItemData: action.payload
      }

    case others.SET_TITLE_PAGE: 
      return {
        ...state,
        titlePage: action.payload
      }

    case others.SET_OPTION: 
      return {
        ...state,
        optionSelect: action.payload
      }

    case others.SET_OTHER_OPTION: 
      return {
        ...state,
        otherOptionSelect: action.payload
      }
    
    case others.SET_MODAL: 
      return {
        ...state,
        isOpenModal: action.payload
      }
    
      case others.SET_CLOSE_MODAL: 
      return {
        ...state,
        isOpenModal: action.payload
      }
    
    case others.CHANGE_CONTENT_MODAL: 
      return {
        ...state,
        displayModal: action.payload
      }
    
    case others.SET_DATA_MODAL: 
      return {
        ...state,
        dataModal: action.payload
      }
    
    case others.LOAD_CEP_REQUEST:
      return {
        ...state,
        loadingCep: true,
        sucessCep: false,
      }

    case others.LOAD_CEP_SUCCESS:
      return {
        ...state,
        loadingCep: false,
        sucessCep: true,
        dataCep: action.payload
      }

    case others.LOAD_CEP_FAIL:
      return {
        ...state,
        loadingCep: false,
        sucessCep: false,
     }
      
    default: 
      return state;
  }
};