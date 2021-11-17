import { createSlice } from "@reduxjs/toolkit";
import { getAllPets } from "../services/petsApi";
import { stateLoading } from "./app";
import { resetError, setError } from "./auth";

const initialState = {
    pets: [],
};

const petsReducer = createSlice({
    name: "pets",
    initialState,
    reducers: {
        getPets: (state, { payload }) => {
            state.pets = payload;
        },
    },
});

export default petsReducer.reducer;

export const { getPets } = petsReducer.actions;

export const getPetsAction = () => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());
    try {
        const pets = await getAllPets();
        dispatch(getPets(pets));
    } catch (e) {
        dispatch(setError(e.message));
    } finally {
        dispatch(stateLoading(false));
    }
};

// export const addLostPost = () => async (dispatch) => {

// }
