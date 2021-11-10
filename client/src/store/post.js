import { createSlice } from "@reduxjs/toolkit";
import { getPosts, getPost, addNewPost } from "../services/postApi";
import { stateLoading } from "./app";
import { resetError, setError } from "./auth";

const initialState = {
    posts: [],
    post: null,
    comments: [],
};
const postsReducer = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, { payload }) => {
            state.posts = payload;
        },
        addPost: (state, { payload }) => {
            state.posts = state.posts.posts.push(payload);
        },
        setCurrentPost: (state, { payload }) => {
            state.post = payload;
        },
        addComment: (state, { payload }) => {
            state.comments = state.comments.push(payload);
        },
    },
});
export default postsReducer.reducer;

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

export const getPostAction = (id) => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());
    try {
        const post = await getPost(id);
        dispatch(setCurrentPost(post));
    } catch (e) {
        dispatch(setError(e.message));
    } finally {
        dispatch(stateLoading(false));
    }
};

export const addPostAction = (post) => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());
    try {
        const response = await addNewPost(post);
        dispatch(addPost({ post: response }));
    } catch (e) {
        dispatch(setError(e.message));
    } finally {
        dispatch(stateLoading(false));
    }
};

export const { setPosts, addPost, setCurrentPost, addComment } =
    postsReducer.actions;
export const postsSelector = (state) => state.posts.posts;
export const postSelector = (state) => state.posts.post;
export const commentsSelector = (state) => state.posts.comments;
