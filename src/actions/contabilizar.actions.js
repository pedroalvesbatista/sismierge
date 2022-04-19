import { toast } from "react-toastify"
import { contabilizar } from "../constants/redux"
// import { authService } from "../services"

export const contabilizarActions = {
  saveData,
  loadData,
  setData,
  setDataStorage,
  setDash,
}

const storage= JSON.parse(localStorage.getItem("@sismiegee/data"))
// const storage= JSON.parse(localStorage.getItem("@sismiegee/data"))

function loadData() {
  return dispatch => {
    
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

function saveData(data, id) {
  return dispatch => {
    dispatch({
      type: contabilizar.SET_SAVE_REQUEST,
    })
    setTimeout(() => {
      toast.success("Salvando com sucesso")
      dispatch({
        type: contabilizar.SET_SAVE_SUCESS,
        payload: data
      })

      // let newData= [...storage]
      // const ex= newData[1].item.options[parseInt(id) - 1]= data[0]
      const saveData= [...storage, storage[1].item.options[parseInt(id) - 1]= data[0]].slice(0, 3)

      localStorage.setItem("@sismiegee/data", JSON.stringify(saveData))
      

      const count = storage[1].item.options[parseInt(id) - 1].name.table[5].valor.map(Number).reduce((a, b) => a+ b)
      const lengtData= storage[1].item.options[parseInt(id) - 1].name.table[5].valor.length
      const dataDash= {percent: parseInt(count/lengtData), value: count}

      setTimeout(() => {
        // setDash('co2', dataDash)
        localStorage.setItem("@sismiegee/dash:co2", JSON.stringify(dataDash))
        // console.log(dataDash);
      }, 500);
      
    }, 3000);
  }
}

function setDash(type, data) {
  return dispatch => {
    if (type == 'co2') {
      dispatch({
        type: contabilizar.SET_CO2,
        payload: data
      })
      console.log(data);
    } else {
      dispatch({
        type: contabilizar.SET_CO2T,
        payload: data
      })
    }
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

