import { toast } from "react-toastify";
import { sheetConstants } from "../constants/redux"
import { sheetService } from "./../services"

export const sheetActions = {
    loadEscopos,
    setDataEscopo,
    loadSubEscopos,
    setSubEscopo
}

function loadEscopos (){

    return dispatch => {
        dispatch({
            type: sheetConstants.LOAD_SHEET_REQUEST,
        })
        sheetService.loadEscopos()
        .then(res => {
            if (res?.data?.response?.data?.error?.code === 429) {
                dispatch({
                    type: sheetConstants.LOAD_SHEET_FAIL,
                    payload: res.data?.response.data.error.message
                })
                toast.error(res.data?.response.data.error.message)
                console.log(res.data?.response.data);
            } else {
                dispatch({
                    type: sheetConstants.LOAD_SHEET_SUCCESS,
                    payload: res.data
                })   
            }
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

function loadSubEscopos (id){

    return dispatch => {
        dispatch({
            type: sheetConstants.LOAD_SUBESCOPO_REQUEST,
        })
        sheetService.loadSubEscopos(id)
        .then(res => {
            dispatch({
                type: sheetConstants.LOAD_SUBESCOPO_SUCCESS,
                payload: res.data
            })
            // console.log(res.data);
        })
        .catch(err => {
            dispatch({
                type: sheetConstants.LOAD_SUBESCOPO_FAIL,
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

function setSubEscopo (data){

    return dispatch => {
        dispatch({
            type: sheetConstants.SET_SUBESCOPO_REQUEST,
        })
        sheetService.setSubEscopo(data)
        .then(res => {
            dispatch({
                type: sheetConstants.SET_SUBESCOPO_SUCCESS,
                payload: res.data
            })
            // console.log(res.data);   
        })
        .catch(err => {
            dispatch({
                type: sheetConstants.SET_SUBESCOPO_FAIL,
                payload: err
            })
            console.log(err);
        })
    }
    
}