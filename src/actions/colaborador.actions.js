import { toast } from "react-toastify";
import { colaboradorConstants } from "../constants/redux"
import { colaboradorService } from "./../services"

export const colaboradorActions = {
    getColaboradors
}

function getColaboradors (){

    return dispatch => {
      dispatch({ 
      type: colaboradorConstants.LOAD_COLABORADOR_REQUEST
    })

    colaboradorService.getColaboradors()
    .then(response => {
        dispatch({ 
          type: colaboradorConstants.LOAD_COLABORADOR_REQUEST,
          payload: response.data
        })
        // console.log(response.data);
    })
    .catch(error => {
      dispatch({ 
        type: colaboradorConstants.LOAD_COLABORADOR_FAIL,
      })
      console.log(error);
    })
    }
}