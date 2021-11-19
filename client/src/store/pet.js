import {createSlice} from "@reduxjs/toolkit"
import {stateLoading} from "./app";
import {resetError, setError} from "./auth";
import {getOnePet, getPets} from "../services/petApi";

const initialState = {
    pets: [],
    currentPet: null
}

const pet = createSlice({
    name: 'pets',
    initialState,
    reducers: {
        setPets: (state, {payload}) => {
            state.pets = payload
        },
        setCurrentPet: (state, {payload}) => {
            state.currentPet = payload
        }
    }
})

export const {setPets, setCurrentPet} = pet.actions
export const petsSelector = state => state.pets

export const getPetsAction = status => async dispatch => {
    dispatch(stateLoading(true))
    dispatch(resetError())
    try {
        const pets = await getPets(status)
        dispatch(setPets(pets))
    } catch (e) {
        dispatch(setError(e))
    } finally {
        dispatch(stateLoading(false))
    }
}

export const getOnePetAction = id => async dispatch => {
    dispatch(stateLoading(true))
    dispatch(resetError())
    try {
        const pet = await getOnePet(id)
        dispatch(setCurrentPet(pet))
    }catch (e) {
        setError(e)
    }finally {
        dispatch(stateLoading(false))
    }
}

export default pet.reducer