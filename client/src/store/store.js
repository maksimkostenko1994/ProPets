import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import app from "./app";
import auth from "./auth";
import posts from "./post";
import services from './service'

const rootReducer = combineReducers({
    app,
    auth,
    posts,
    services
});

const store = configureStore({ reducer: rootReducer });
export default store;
