import { others } from "../constants/redux"

const initialState = {
  titlePage: 'Visão geral',
  optionSelect: '',
  otherOptionSelect: ''
}

export const othersReducer = (state = initialState, action) => {
  switch(action.type) {
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
      
    default: 
      return state;
  }
};