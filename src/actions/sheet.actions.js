import { toast } from "react-toastify";
import { sheetConstants } from "../constants/redux"
import { sheetService } from "./../services"

export const sheetActions = {
    loadEscopos,
    setDataEscopo,
    loadSubEscopos,
    setSubEscopo, 
    cleanSubEscopo,
    loadResumo
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

function loadResumo (){

    return dispatch => {
        dispatch({
            type: sheetConstants.LOAD_RESUMO_REQUEST,
        })
        sheetService.loadSheet(312517928)
        .then(({data}) => {
            const newData= {
                title: data[0][1],
                ano: parseInt(data[0][5].split(": ")[1]),
                emisions: [
                    {
                        title: data[2][1],
                        tables: [
                            { header: data[3][2], sub_header: [ 
                                {title: data[4][1], items: [data[5][1], data[6][1], data[7][1], data[8][1], data[28][1], data[39][1], data[40][1], data[41][1], ] },
                                {title: data[4][2], items: [data[5][2], data[6][2], data[7][2], data[8][2], data[28][2], data[39][2], data[40][2], data[41][2], ] },
                                {title: data[4][3], items: [data[5][3], data[6][3], data[7][3], data[8][3], data[28][3], data[39][3], data[40][3], data[41][3], ] },
                                {title: data[4][4], items: [data[5][4], data[6][4], data[7][4], data[8][4], data[28][4], data[39][4], data[40][4], data[41][4], ] },
                                {title: data[4][5], items: [data[5][5], data[6][5], data[7][5], data[8][5], data[28][5], data[39][5], data[40][5], data[41][5], ] }
                            ]},
                            { header: data[3][6], sub_header: [ 
                                {title: data[4][2], items: [data[5][6], data[6][6], data[7][6], data[8][6], data[28][6], data[39][6], data[40][6], data[41][6], ] },
                                {title: data[4][3], items: [data[5][7], data[6][7], data[7][7], data[8][7], data[28][7], data[39][7], data[40][7], data[41][7], ] },
                                {title: data[4][4], items: [data[5][8], data[6][8], data[7][8], data[8][8], data[28][8], data[39][8], data[40][8], data[41][8], ] },
                                {title: data[4][5], items: [data[5][9], data[6][9], data[7][9], data[8][9], data[28][9], data[39][9], data[40][9], data[41][9], ] }
                            ]}
                        ]
                    },
                    {
                        title: data[45][1],
                        tables: [
                            { header: false, sub_header: [ 
                                {title: false, items: [data[47][1], data[48][1], data[49][1], data[50][1], data[51][1], data[52][1], data[53][1], data[54][1], ] },
                                {title: data[4][2], items: [data[47][2],false, false, false, false, false, false, data[54][2] ] },
                                {title: data[4][3], items: [data[47][3],false, false, false, false, false, false, data[54][3] ] },
                                {title: data[4][4], items: [data[47][4],false, false, false, false, false, false, data[54][4] ] },
                                {title: data[4][5], items: [data[47][5],false, false, false, false, false, false, data[54][5] ] }
                            ]}
                        ]
                    }
                ]
            }
            dispatch({
                type: sheetConstants.LOAD_RESUMO_SUCCESS,
                payload: newData
            })
            console.log(data);
        })
        .catch(err => {
            dispatch({
                type: sheetConstants.LOAD_RESUMO_FAIL,
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
        sheetService.loadSheet(id)
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

function cleanSubEscopo (){

    return dispatch => {
        dispatch({
            type: sheetConstants.CLEAR_SUBESCOPO,
        })
    }
    
}