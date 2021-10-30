import {createSlice} from "@reduxjs/toolkit";
import {authSuccess, setCurrentUser, stateLoading} from "./app";
import {getCurrentUser, getUserData, login, registration} from "../services/userApi";

const initialState = {
    error: null
}

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setError: (state, {payload}) => {
            state.error = payload.error
        },
        resetError: state => {
            state.error = null
        }
    }
})

export default authReducer.reducer

export const {setError, resetError} = authReducer.actions

export const loginAction = data => async dispatch => {
    dispatch(stateLoading(true))
    dispatch(resetError())
    try {
        await login(data)
        dispatch(authSuccess())
    } catch (error) {
        dispatch(setError(error.message))
    } finally {
        dispatch(stateLoading(false))
    }
}

export const registrationAction = data => async dispatch => {
    dispatch(stateLoading(true))
    dispatch(resetError())
    try {
        await registration(data)
        dispatch(authSuccess())
    } catch (error) {
        dispatch(setError(error.message))
    } finally {
        dispatch(stateLoading(false))
    }
}

export const getUser = () => async dispatch => {
    dispatch(stateLoading(true))
    dispatch(resetError())
    try {
        const user = await getUserData(getCurrentUser().id)
        dispatch(setCurrentUser(user))
    }catch (error) {
        dispatch(setError(error.message))
    }finally {
        dispatch(stateLoading(false))
    }
}


export const errorSelector = state => state.auth.error
