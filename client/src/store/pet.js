import { createSlice } from "@reduxjs/toolkit";
import { stateLoading } from "./app";
import { resetError, setError } from "./auth";
import {
    addFoundPet,
    addNewLostPost,
    deletePet,
    getOnePet,
    getPets,
    updatePet,
} from "../services/petApi";

const initialState = {
    pets: null,
    currentPet: null,
};

const pet = createSlice({
    name: "pets",
    initialState,
    reducers: {
        setPets: (state, { payload }) => {
            state.pets = payload;
        },
        setCurrentPet: (state, { payload }) => {
            state.currentPet = payload;
        },
        updatePetStatus: (state, { payload }) => {
            state.pets = state.filter((item) => item.id !== payload);
        },
    },
});

export const { setPets, setCurrentPet, updatePetStatus } = pet.actions;
export const petsSelector = (state) => state.pets;

export const getPetsAction = (status) => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());
    try {
        const pets = await getPets(status);
        dispatch(setPets(pets));
    } catch (e) {
        dispatch(setError({ data: e.data, status: e.status }));
    } finally {
        dispatch(stateLoading(false));
    }
};

export const getOnePetAction = (id) => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());
    try {
        const pet = await getOnePet(id);
        dispatch(setCurrentPet(pet));
    } catch (e) {
        setError({ data: e.data, status: e.status });
    } finally {
        dispatch(stateLoading(false));
    }
};

export const addLostPetPost = (pet) => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());
    try {
        await addNewLostPost(pet);
    } catch (e) {
        dispatch(setError({ data: e.data, status: e.status }));
    } finally {
        dispatch(stateLoading(false));
    }
};

export const addFoundPetAction = (pet) => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());
    try {
        await addFoundPet(pet);
    } catch (e) {
        dispatch(setError({ data: e.data, status: e.status }));
    } finally {
        dispatch(stateLoading(false));
    }
};

export const updatePetAction = (id, status, contacts) => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());
    try {
        await updatePet(id, status, contacts);
        dispatch(updatePetStatus(id));
    } catch (e) {
        setError({ data: e.data, status: e.status });
    } finally {
        dispatch(stateLoading(false));
    }
};

export const deletePetAction = (id) => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());
    try {
        const text = await deletePet(id);
        console.log(text);
    } catch (e) {
        setError({ data: e.data, status: e.status });
    } finally {
        dispatch(stateLoading(false));
    }
};

export default pet.reducer;
