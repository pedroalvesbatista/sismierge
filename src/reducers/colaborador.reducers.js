import { colaboradorConstants } from "../constants/redux"

const initialState = {
    loading: false,
    sucess: false,
    error: false,
    colaboradors: [],
}

export const colaboradorsReducer = (state = initialState, action) => {
  switch(action.type) {

    case colaboradorConstants.LOAD_COLABORADOR_REQUEST:
      return {
        ...state,
        loading: true,
      }
      

    case colaboradorConstants.LOAD_COLABORADOR_SUCCESS:
      console.log(action.type)
      console.log(state);
      return {
        ...state,
        loading: false,
        colaboradors: action.payload,
      }

    case colaboradorConstants.LOAD_COLABORADOR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default: 
      return state;
  }
};