import { contabilizar } from "../constants/redux"
// import { authService } from "../services"

export const contabilizarActions = {
  saveData,
  loadData,
  setData,
  setDataStorage
}

function loadData() {
  return dispatch => {
    const storage= JSON.parse(localStorage.getItem("@sismiegee/data"))
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
    } else {
      dispatch({
        type: contabilizar.GET_DATA_FAIL,
        payload: "Uma coisa deu ruim"
      })
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

function setDataStorage(data) {
  return dispatch => {
    const storage= JSON.parse(localStorage.getItem("@sismiegee/data"))
    if (!storage) {
      localStorage.setItem("@sismiegee/data", JSON.stringify(data))
      dispatch({
        type: contabilizar.SET_DATA,
        payload: data
      })
      console.log(data);
    }
    // console.log(data);
  }
}

