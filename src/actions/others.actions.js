import { toast } from "react-toastify";
import { others } from "../constants/redux"
import { othersService } from "../services";

export const othersActions = {
    handleOpenModal,
    closeModal,
    changeDisplayModal,
    setDataModal,
    loadCep,
    openModalInventory,
    handleInicialState,
}

function handleInicialState (data){
    return dispatch => {
        dispatch({ 
            type: others.SET_INITIAL_STATE,
            payload: data
        })
    }
}

function handleOpenModal (display, inventory){
    return dispatch => {
        dispatch({ 
            type: others.SET_MODAL,
            payload: true
        })

        dispatch({ 
            type: others.CHANGE_CONTENT_MODAL,
            payload: inventory ? display : display?.toLowerCase() 
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

        dispatch({ 
            type: others.CHANGE_CONTENT_MODAL,
            payload: ""
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

function openModalInventory (display){
    return dispatch => {
        dispatch({ 
            type: others.SET_MODAL_INVENTORY,
            payload: true
        })

        dispatch({ 
            type: others.CHANGE_CONTENT_MODAL,
            payload: display
        })
    }
}

// function changeDisplayModalInventory (display){
//     return dispatch => {
//         dispatch({ 
//             type: others.CHANGE_CONTENT_MODAL,
//             payload: display?.toLowerCase()
//         })
//     }
// }

// function closeModal (){
//     return dispatch => {
//         dispatch({ 
//             type: others.SET_CLOSE_MODAL,
//             payload: false
//         })
//     }
// }

function loadCep (cep){

    return dispatch => {
      dispatch({ 
      type: others.LOAD_CEP_REQUEST
    })
  
    othersService.loadCep(cep)
    .then(response => {
  
      dispatch({ 
        type: others.LOAD_CEP_SUCCESS,
        payload: response.data
      })

      setTimeout(() => {
        dispatch({ 
            type: others.CLEAN_CEP
        })
      }, 1000);
        
    })
    .catch(error => {
      dispatch({ 
        type: others.LOAD_CEP_FAIL,
      })
      toast.error("cep inválido")
      setTimeout(() => {
        dispatch({ 
            type: others.CLEAN_CEP
        })
      }, 1000);
      console.log(error);
    })
    }
  }