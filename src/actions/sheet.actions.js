import { toast } from "react-toastify";
import { sheetConstants } from "../constants/redux"
import { sheetService } from "./../services"

export const sheetActions = {
    loadEscopos,
    setDataEscopo
}

function loadEscopos (){

    return dispatch => {
        dispatch({
            type: sheetConstants.LOAD_SHEET_REQUEST,
        })
        sheetService.loadEscopos()
        .then(res => {
            dispatch({
                type: sheetConstants.LOAD_SHEET_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: sheetConstants.LOAD_SHEET_FAIL,
                payload: err
            })
            console.log(err);
        })
    }
    
}

function setDataEscopo (data){

    return dispatch => {
        dispatch({
            type: sheetConstants.SET_DATA_ESCOPO,
            payload: data
        })
    }
    
}