import { mailConstants } from "../constants/redux";

const initialState = {
    loadingSendConvite: false,
    sucessSendConvite: false,
    errorSendConvite: false,
    dataConvite: null
}

export const mailReducer = ( state= initialState, action) => {
    switch (action.type) {

        case mailConstants.SEND_CONVITE_REQUEST:
            return {
                ...state,
                loadingSendConvite: true,
                sucessSendConvite: false,
                errorSendConvite: false
            }
        case mailConstants.SEND_CONVITE_SUCCESS:
            return {
                ...state,
                loadingSendConvite: false,
                sucessSendConvite: true,
                errorSendConvite: false,
                dataConvite: action.payload
            }
        case mailConstants.SEND_CONVITE_FAIL:
            return {
                ...state,
                loadingSendConvite: false,
                sucessSendConvite: false,
                errorSendConvite: true
            }
        
        case mailConstants.CLEAR_All:
            return {
                ...state,
                loadingSendConvite: false,
                sucessSendConvite: false,
                errorSendConvite: false
            }
    
        default:
            return state;
    }
}