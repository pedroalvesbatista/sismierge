import { toast } from "react-toastify";
import { companyConstants } from "../constants/redux"
import { companyService } from "../services"

export const companyActions = {
    getCompanies,
    createCompany,
    getUserCompany
}

const storageCompany= {
  loading: false,
  data: []
}

function getCompanies (){

    return dispatch => {
      dispatch({ 
      type: companyConstants.LOAD_COMPANY_REQUEST
    })

    companyService.getCompanies()
    .then(response => {
        dispatch({ 
          type: companyConstants.LOAD_COMPANY_REQUEST,
          payload: response.data
        })
    })
    .catch(error => {
      dispatch({ 
        type: companyConstants.LOAD_COMPANY_FAIL,
      })
      console.log(error);
    })
    }
}

function getUserCompany (){

  return dispatch => {
    dispatch({ 
    type: companyConstants.LOAD_COMPANY_REQUEST
  })

  companyService.getUserCompany()
  .then(response => {
      dispatch({ 
        type: companyConstants.LOAD_COMPANY_REQUEST,
        payload: response.data
      })
  })
  .catch(error => {
    dispatch({ 
      type: companyConstants.LOAD_COMPANY_FAIL,
    })
    console.log(error);
  })
  }
}

function createCompany (userData){

  return dispatch => {
    dispatch({ 
    type: companyConstants.CREATE_COMPANY_REQUEST
  })

  companyService.createCompany(userData)
  .then(response => {
      dispatch({ 
        type: companyConstants.CREATE_COMPANY_SUCCESS,
        payload: response.data.data.attributes
      })
      console.log(response.data.data.attributes);
  })
  .catch(error => {
    dispatch({ 
      type: companyConstants.CREATE_COMPANY_FAIL,
    })
    if (error.response.data.error.message === "Email is already taken") {
      toast.error("O e-mail já foi cadastrado")
    }
    console.log(error.response.data.error);
  })
  }
}