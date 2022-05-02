import { toast } from "react-toastify";
import { others } from "../constants/redux"

export const othersActions = {
    handleOpenModal,
    closeModal,
    changeDisplayModal
}

function handleOpenModal (display){
    return dispatch => {
        dispatch({ 
            type: others.SET_MODAL,
            payload: true
        })

        dispatch({ 
            type: others.CHANGE_CONTENT_MODAL,
            payload: display?.toLowerCase()
        })
    }
}

function changeDisplayModal (display){
    return dispatch => {
        dispatch({ 
            type: others.CHANGE_CONTENT_MODAL,
            payload: display?.toLowerCase()
        })
    }
}

function closeModal (){
    return dispatch => {
        dispatch({ 
            type: others.SET_CLOSE_MODAL,
            payload: false
        })
    }
}