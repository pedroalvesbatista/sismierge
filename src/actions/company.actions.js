import { toast } from "react-toastify";
import { companyConstants } from "../constants/redux"
import { companyService } from "../services"

export const companyActions = {
    getCompanies,
    createCompany
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
    localStorage.setItem(`@sismiegee/admin/company`, JSON.stringify({...storageCompany, loading: true}))

    companyService.getCompanies()
    .then(response => {
        dispatch({ 
          type: companyConstants.LOAD_COMPANY_REQUEST,
          payload: response.data
        })
        setTimeout(() => {
          localStorage.setItem(`@sismiegee/admin/company`, JSON.stringify({loading: false, data: response.data.data}))
        }, 500);
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
  localStorage.setItem(`@sismiegee/admin/company`, JSON.stringify({...storageCompany, loading: true}))

  companyService.createCompany(userData)
  .then(response => {
      dispatch({ 
        type: companyConstants.CREATE_COMPANY_SUCCESS,
        payload: response.data.data.attributes
      })
      console.log(response.data.data.attributes);
      setTimeout(() => {
        localStorage.setItem(`@sismiegee/admin/company`, JSON.stringify({...storageCompany, loading: false}))
      }, 500);
  })
  .catch(error => {
    dispatch({ 
      type: companyConstants.CREATE_COMPANY_FAIL,
    })
    console.log(error.response.data.error);
  })
  }
}