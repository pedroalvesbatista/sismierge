import { toast } from "react-toastify";
import { companyConstants } from "../constants/redux"
import { companyService } from "../services"

export const companyActions = {
    getCompanies,
    createCompany,
    getUserCompany,
    updateCompany
}

const storageCompany= {
  loading: false,
  data: []
}

function getCompanies (){
  const storage= JSON.parse(localStorage.getItem("@sismiegee/auth")).user

    return dispatch => {
      dispatch({ 
      type: companyConstants.LOAD_COMPANY_REQUEST
    })

    companyService.getCompanies()
    .then(response => {
      const filterById = response?.data?.data?.filter((item) => {
        return item?.attributes?.users?.includes(storage?.id);
      })
      dispatch({ 
        type: companyConstants.LOAD_COMPANY_SUCCESS,
        payload: {id: filterById[0]?.id, ...filterById[0]?.attributes}
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
    console.log(error.response);
  })
  }
}

function updateCompany (userData, id){

  return dispatch => {
    dispatch({ 
    type: companyConstants.UPDATE_COMPANY_REQUEST
  })

  companyService.updateCompany(userData, id)
  .then(response => {
      dispatch({ 
        type: companyConstants.UPDATE_COMPANY_SUCCESS,
        payload: response.data
      })
      // console.log(response.data.data.attributes);
  })
  .catch(error => {
    dispatch({ 
      type: companyConstants.UPDATE_COMPANY_FAIL,
    })
    console.log(error.response);
  })
  }
}