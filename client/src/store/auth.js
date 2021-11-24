import { createSlice } from "@reduxjs/toolkit";
import { authSuccess, logout, setCurrentUser, stateLoading } from "./app";
import {
    check,
    getUser,
    login,
    registration,
    updateUser,
} from "../services/userApi";

const initialState = {
    error: null,
};

const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setError: (state, { payload }) => {
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
        dispatch(setError({ data: e.data, status: e.status }));
    } finally {
        dispatch(stateLoading(false));
    }
};

export const loginAction = (data) => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());

    try {
        const user = await login(data);
        dispatch(setCurrentUser(user.data.user));
        dispatch(authSuccess());
        return user;
    } catch (e) {
        dispatch(setError({ data: e.data, status: e.status }));
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
    } catch (e) {
        dispatch(setError({ data: e.data, status: e.status }));
    } finally {
        dispatch(stateLoading(false));
    }
};

export const logoutAction = () => async (dispatch) => {
    dispatch(logout());
    dispatch(setCurrentUser(null));
};

export const getUserAction = (id) => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());
    try {
        const user = await getUser(id);
        setCurrentUser(user);
    } catch (e) {
        dispatch(setError({ data: e.data, status: e.status }));
    } finally {
        dispatch(stateLoading(false));
    }
};

export const updateAction =
    (obj, avatarOld, petPhotoOld) => async (dispatch) => {
        dispatch(stateLoading(true));
        dispatch(resetError());
        try {
            const user = await updateUser(obj, avatarOld, petPhotoOld);
            dispatch(setCurrentUser(user));
        } catch (e) {
            dispatch(setError({ data: e.data, status: e.status }));
        } finally {
            dispatch(stateLoading(false));
        }
    };

export const errorSelector = (state) => state.auth.error;
