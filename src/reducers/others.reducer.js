import { others } from "../constants/redux"

const initialState = {
  titlePage: 'Visão geral'
}

export const othersReducer = (state = initialState, action) => {
  switch(action.type) {
    case others.SET_HOMETITLE: 
      return {
        ...state,
        titlePage: action.payload
      }
      
    default: 
      return state;
  }
};