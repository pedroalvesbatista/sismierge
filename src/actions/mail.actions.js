import { toast } from "react-toastify";
import { mailConstants } from "../constants/redux";
import { mailService } from "../services";

export const mailActions = {
    sendConvite
}

function sendConvite (userData){
    return dispatch => {
        dispatch({ 
            type: mailConstants.SEND_CONVITE_REQUEST
        })
  
        mailService.sendConvite(userData)
            .then(response => {
                dispatch({ 
                    type: mailConstants.SEND_CONVITE_SUCCESS,
                    payload: response.data
                })

                console.log("Enviado deu certo");

                toast.success(`Link foi enviado com sucesso para ${userData.email}`)
                
            })
            .catch(error => {
                dispatch({ 
                    type: mailConstants.SEND_CONVITE_FAIL,
                })
                console.log(error);
            })
    }
}