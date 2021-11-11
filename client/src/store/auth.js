import { createSlice } from "@reduxjs/toolkit";
import { authSuccess, logout, setCurrentUser, stateLoading } from "./app";
import { check, login, registration, updateUser } from "../services/userApi";

const initialState = {
    error: null,
};

const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setError: (state, { payload }) => {
            console.error(payload);
            state.error = payload;
        },
        resetError: (state) => {
            state.error = null;
        },
    },
});

export default authReducer.reducer;

export const { setError, resetError } = authReducer.actions;

export const checkAuthAction = () => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());
    try {
        const { user } = await check();
        dispatch(setCurrentUser(user));
        dispatch(authSuccess());
    } catch (e) {
        dispatch(setError(e));
    } finally {
        dispatch(stateLoading(false));
    }
};

export const loginAction = (data) => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());
    try {
        const user = await login(data);
        dispatch(setCurrentUser(user));
        dispatch(authSuccess());
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(stateLoading(false));
    }
};

export const registrationAction = (data) => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());
    try {
        const user = await registration(data);
        dispatch(authSuccess());
        dispatch(setCurrentUser(user));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(stateLoading(false));
    }
};

export const logoutAction = () => async (dispatch) => {
    dispatch(logout());
    dispatch(setCurrentUser(null));
};

export const updateAction = (obj) => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());
    try {
        const user = await updateUser(obj);
        dispatch(setCurrentUser(user));
    } catch (e) {
        dispatch(setError(e));
    } finally {
        dispatch(stateLoading(false));
    }
};

export const errorSelector = (state) => state.auth.error;
