import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
  othersReducer, 
  authReducer, 
  colaboradorsReducer, 
  companyReducer, 
  contabilizarReducer, 
  mailReducer 
} from "../reducers"

export const store = createStore(
  combineReducers({
    auth: authReducer,
    colaborador: colaboradorsReducer,
    company: companyReducer,
    others: othersReducer,
    contabilizar: contabilizarReducer,
    mail: mailReducer,
  }),
  
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);