import { createSlice } from "@reduxjs/toolkit";
import { addNewDislike, addNewLike } from "../services/likeApi";
import { getPosts, getPost, addNewPost } from "../services/postApi";
import { stateLoading } from "./app";
import { resetError, setError } from "./auth";
import { setCurrentPage, setPagination } from "./pagination";

const initialState = {
    posts: [],
    post: null,
    likes: [],
};
const postsReducer = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, { payload }) => {
            state.posts = payload;
        },
        addPost: (state, { payload }) => {
            state.posts.push({ ...payload });
        },
        setCurrentPost: (state, { payload }) => {
            state.post = payload;
        },
        addLike: (state, { payload }) => {
            state.likes.push(payload);
        },
        addDislike: (state, { payload }) => {
            state.likes.splice(payload);
        },
    },
});
export default postsReducer.reducer;

export const getPostsAction = (page, limit) => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());
    try {
        const posts = await getPosts(page, limit);
        dispatch(setPosts(posts));
        dispatch(setPagination({ total: posts.count, limit: 2 }));
        dispatch(setCurrentPage(page));
    } catch (e) {
        console.log("error");
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
        dispatch(addPost(response));
    } catch (e) {
        dispatch(setError(e.message));
    } finally {
        dispatch(stateLoading(false));
    }
};

export const addLikeAction = (postId, userId) => async (dispatch) => {
    dispatch(resetError());
    try {
        const response = await addNewLike(postId, userId);
        dispatch(addLike(response));
        dispatch(getPostAction(response.postId));
    } catch (e) {
        dispatch(setError(e.message));
    }
};

export const addDislikeAction = (like) => async (dispatch) => {
    dispatch(resetError());
    try {
        await addNewDislike(like);
        dispatch(getPostAction(like.postId));
    } catch (e) {
        dispatch(setError(e.message));
    }
};

export const { setPosts, addPost, setCurrentPost, addLike, addDislike } =
    postsReducer.actions;
export const postsSelector = (state) => state.posts.posts;
export const postSelector = (state) => state.posts.post;

// export const getPostsAction = (page, limit) => async (dispatch) => {
//     dispatch(stateLoading(true));
//     dispatch(resetError());
//     try {
//         const posts = await getPosts(page, limit);
//         dispatch(setPosts(posts));
//         dispatch(setPagination({ total: posts.count, limit: 2 }));
//         dispatch(setCurrentPost(page));
//     } catch (e) {
//         console.log("error");
//         dispatch(setError(e.message));
//     } finally {
//         dispatch(stateLoading(false));
//     }
// };
