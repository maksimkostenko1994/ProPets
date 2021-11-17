import { createSlice } from "@reduxjs/toolkit";
import { addNewLostPost, getAllPets, getOnePet } from "../services/petsApi";
import { stateLoading } from "./app";
import { resetError, setError } from "./auth";

const initialState = {
    pets: [
        //temporary dogs======
        {
            id: 0,
            nick: `Mamba`,
            type: `dog`,
            sex: `male`,
            breed: `buldog`,
            color: `black`,
            height: `30cm`,
            distinctive: `begaet`,
            description: `bistro begaet`,
            location: `Berlin platy 34`,
            phone: `123213123`,
            email: `mail@mail.ru`,
            image: `3ccfc623-15cf-4842-bf67-973c66046210.jpg`,
            status: `lost`,
        },
        {
            id: 1,
            nick: `Mamba jumba`,
            type: `dog`,
            sex: `male`,
            breed: `buldog`,
            color: `black`,
            height: `30cm`,
            distinctive: `begaet`,
            description: `bistro begaet`,
            location: `Berlin platy 23`,
            phone: `123213123`,
            email: `mail@mail.ru`,
            image: `3b3f44b8-508f-4bd4-a89a-04c3acda4d45.jpg`,
            status: "found",
        },
    ],
    pet: [],
};

const petsReducer = createSlice({
    name: "pets",
    initialState,
    reducers: {
        getPets: (state, { payload }) => {
            state.pets = payload;
        },
        addLostPost: (state, { payload }) => {
            state.pets.push(payload);
        },
        getPet: (state, { payload }) => {
            state.pet = payload;
        },
    },
});

export default petsReducer.reducer;

export const { getPets, addLostPost, getPet } = petsReducer.actions;
export const petsSelector = (state) => state.pets.pets;
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

export const addLostPetPost = (obj) => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());
    try {
        const post = await addNewLostPost(obj);
        dispatch(addLostPost(post));
    } catch (e) {
        dispatch(setError(e.message));
    } finally {
        dispatch(stateLoading(false));
    }
};

export const getOnePetById = (id) => async (dispatch) => {
    dispatch(resetError());
    try {
        const pet = await getOnePet(id);
        dispatch(getPet(pet));
    } catch (e) {
        dispatch(setError(e.message));
    }
};
