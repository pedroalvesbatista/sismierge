import { contabilizar } from "../constants/redux"
// import { authService } from "../services"

export const contabilizarActions = {
  saveData,
  loadData,
  setData,
}

function loadData() {
  return dispatch => {
    const storage= JSON.parse(localStorage.getItem("@sismiegee/data:contabilizar"))
    dispatch({
      type: contabilizar.GET_DATA_REQUEST,
    })
    if (storage) {
      setTimeout(() => {
        dispatch({
          type: contabilizar.GET_DATA_SUCESS,
          payload: storage
        })
        // console.log(storage);
        
      }, 3000);
    }
  }
}

function saveData(data) {
  return dispatch => {
    dispatch({
      type: contabilizar.SET_SAVE_REQUEST,
    })
    setTimeout(() => {
      dispatch({
        type: contabilizar.SET_SAVE_SUCESS,
        payload: data
      })

      localStorage.setItem("@sismiegee/data:contabilizar", JSON.stringify(data))
      console.log(data);
      
    }, 3000);
  }
}

function setData(data) {
  return dispatch => {
    // const storage= JSON.parse(localStorage.getItem("@sismiegee/data:contabilizar"))
    dispatch({
      type: contabilizar.SET_DATA,
      payload: data
    })
    // console.log(data);
  }
}

