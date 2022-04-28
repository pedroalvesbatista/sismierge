import { createStore, combineReducers, applyMiddleware } from "redux"
import { othersReducer } from "../reducers/others.reducer"
import { authReducer } from "../reducers/auth.reducers"
import { colaboradorsReducer } from "../reducers/colaborador.reducers"
import { contabilizarReducer } from "../reducers/contabilizar.reducer"

import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(
  combineReducers({
    auth: authReducer,
    colaborador: colaboradorsReducer,
    others: othersReducer,
    contabilizar: contabilizarReducer,
  }),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);