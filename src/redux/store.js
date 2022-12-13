import {legacy_createStore as createStore,  compose}  from "redux";
import OperationsReducers from "./reducer/OperationsReducer"
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";


export const store = createStore(OperationsReducers,(applyMiddleware(thunk)));
