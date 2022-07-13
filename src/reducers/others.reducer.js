import { others } from "../constants/redux"

const initialState = {
  titlePage: 'Visão geral',
  optionSelect: '',
  otherOptionSelect: '',
  isOpenModal: false,
  displayModal: null,
  dataModal: null,
  loadingCep: false,
  sucessCep: false,
  dataCep: null, 
  initialItemData: {
    registro_fonte: "",
    desc_fonte: "",
    qtd_consumida: "",
    combustivel_utilizado: "",
    fator_emissao_setor: "",
  }
}

export const othersReducer = (state = initialState, action) => {
  switch(action.type) {

    case others.SET_INITIAL_STATE: 
      return {
        ...state,
        initialItemData: action.payload
      }

    case others.SET_HOMETITLE: 
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