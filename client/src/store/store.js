import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import app from "./app";
import auth from "./auth";
import posts from "./post";
import services from "./service";
import comments from "./comment";

const rootReducer = combineReducers({
    app,
    auth,
    posts,
    services,
    comments,
});

const store = configureStore({ reducer: rootReducer });
export default store;
