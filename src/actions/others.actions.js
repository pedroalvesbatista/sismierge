import { toast } from "react-toastify";
import { others } from "../constants/redux"

export const othersActions = {
    handleOpenModal,
    closeModal,
    changeDisplayModal,
    setDataModal,
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

function setDataModal (data){
    return dispatch => {
        dispatch({ 
            type: others.SET_DATA_MODAL,
            payload: data
        })
    }
}