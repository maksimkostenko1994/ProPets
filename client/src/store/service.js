import {createSlice} from "@reduxjs/toolkit";
import {stateLoading} from "./app";
import {resetError, setError} from "./auth";
import {getServices} from "../services/serviceApi";

const initialState = {
    services: [],
    currentService: null
}

const serviceReducer = createSlice({
    name: 'services',
    initialState,
    reducers: {
        setServices: (state, {payload}) => {
            state.services = payload
        },
        setService: (state, {payload}) => {
            state.currentService = payload
        }
    }
})

export default serviceReducer.reducer
export const {setServices, setService} = serviceReducer.actions
export const serviceSelector = state => state.services

export const getServicesAction = type => async dispatch => {
    dispatch(stateLoading(true))
    dispatch(resetError())
    try {
        const services = await getServices(type)
        dispatch(setServices(services))
    } catch (e) {
        dispatch(setError(e.message))
    } finally {
        dispatch(stateLoading(false))
    }
}