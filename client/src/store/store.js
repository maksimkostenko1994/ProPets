import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import app from "./app";
import auth from "./auth";
import posts from "./post";
import services from "./service";
import comments from "./comment";
import pets from "./pets";

const rootReducer = combineReducers({
    app,
    auth,
    posts,
    services,
    comments,
    pets,
});

const store = configureStore({ reducer: rootReducer });
export default store;
