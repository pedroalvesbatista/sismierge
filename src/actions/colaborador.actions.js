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
    localStorage.setItem(`@sismiegee/admin/colaborador/loading`, true)

    colaboradorService.getColaboradors()
    .then(response => {
        dispatch({ 
          type: colaboradorConstants.LOAD_COLABORADOR_REQUEST,
          payload: response.data
        })
        setTimeout(() => {
          localStorage.setItem(`@sismiegee/admin/colaborador`, JSON.stringify(response.data))
          localStorage.setItem(`@sismiegee/admin/colaborador/loading`, false)
        }, 5000);
    })
    .catch(error => {
      dispatch({ 
        type: colaboradorConstants.LOAD_COLABORADOR_FAIL,
      })
      console.log(error);
    })
    }
}