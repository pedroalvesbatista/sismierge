import { toast } from "react-toastify";
import { colaboradorConstants } from "../constants/redux"
import { colaboradorService } from "./../services"

export const colaboradorActions = {
    getColaboradors
}

function getColaboradors (){

    // return dispatch => {
    //   dispatch({ 
    //   type: colaboradorConstants.LOAD_COLABORADOR_REQUEST
    // })
    // localStorage.setItem(`@sismiegee/admin/colaborador/loading`, true)

    colaboradorService.getColaboradors()
    // }
}