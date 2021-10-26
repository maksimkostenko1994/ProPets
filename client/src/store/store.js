import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import app from "./app";
import auth from "./auth";

const rootReducer = combineReducers({
    app,
    auth
})

const store = configureStore({reducer: rootReducer})
export default store