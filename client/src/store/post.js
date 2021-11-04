import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../services/postApi";
import { stateLoading } from "./app";
import { resetError, setError } from "./auth";

const initialState = {
    posts: [],
};
const postsReducer = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, { payload }) => {
            state.posts = payload;
        },
        addPost: (state, { payload }) => {
            state.posts = state.posts.push(payload);
        },
    },
});
export default postsReducer.reducer;
export const { setPosts, addPost } = postsReducer.actions;
export const postsSelector = (state) => state.posts.posts;

export const getPostsAction = () => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());
    try {
        const posts = await getPosts();
        dispatch(setPosts(posts));
    } catch (e) {
        dispatch(setError(e.message));
    } finally {
        dispatch(stateLoading(false));
    }
};
