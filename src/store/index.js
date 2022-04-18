import { createStore, combineReducers, applyMiddleware } from "redux"
import { othersReducer } from "../reducers/others.reducer"
import { contabilizarReducer } from "../reducers/contabilizar.reducer"

import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(
  combineReducers({
    others: othersReducer,
    contabilizar: contabilizarReducer,
  }),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);