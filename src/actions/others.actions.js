import { toast } from "react-toastify";
import { others } from "../constants/redux"

export const othersActions = {
    handleModal
}

function handleModal (display){
    console.log("Entrou");
    return dispatch => {
        dispatch({ 
            type: others.SET_MODAL,
            payload: true
        })
    }
}