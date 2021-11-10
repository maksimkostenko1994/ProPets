import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    auth: false,
    loading: false,
    currentUser: null,
};

const appReducer = createSlice({
    name: "app",
    initialState,
    reducers: {
        authSuccess: (state) => {
            state.auth = localStorage.getItem("token") !== null;
        },
        stateLoading: (state, {payload}) => {
            state.loading = payload;
        },
        logout: (state) => {
            localStorage.removeItem("token");
            state.auth = false;
        },
        setCurrentUser: (state, {payload}) => {
            state.currentUser = payload;
        },
    },
});

export default appReducer.reducer;

export const {authSuccess, stateLoading, logout, setCurrentUser} =
    appReducer.actions;

export const appSelector = (state) => state.app;
export const authSelector = (state) => state.app.auth;
export const userSelector = (state) => state.app.currentUser;
