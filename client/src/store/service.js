import {createSlice} from "@reduxjs/toolkit";
import {stateLoading} from "./app";
import {resetError, setError} from "./auth";
import {addService, getService, getServices} from "../services/serviceApi";

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
        dispatch(setError(e))
    } finally {
        dispatch(stateLoading(false))
    }
}

export const addServiceAction = service => async dispatch=> {
    dispatch(stateLoading(true))
    dispatch(resetError())
    try {
        await addService(service)
    }catch (e) {
        dispatch(setError(e))
    }finally {
        dispatch(stateLoading(false))
    }
}

export const getServiceAction = id => async dispatch => {
    dispatch(stateLoading(true))
    dispatch(resetError())
    try {
        const service = await getService(id)
        dispatch(setService(service))
    }catch (e) {
        dispatch(setError(e))
    }finally {
        dispatch(stateLoading(false))
    }
}