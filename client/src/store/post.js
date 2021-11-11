import { createSlice } from "@reduxjs/toolkit";
import { addNewComment } from "../services/commentApi";
import { addNewLike } from "../services/likeApi";
import { getPosts, getPost, addNewPost } from "../services/postApi";
import { stateLoading } from "./app";
import { resetError, setError } from "./auth";

const initialState = {
    posts: [],
    post: null,
    comments: [],
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
        setPostComments: (state, { payload }) => {
            state.comments = payload;
        },
        addLike: (state, { payload }) => {
            state.likes.push(payload);
        },
        addComment: (state, { payload }) => {
            //getState
            // state.comments = [{ payload }];
            state.comments = [...state.posts.comments, { payload }];
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
    } catch (e) {
        dispatch(setError(e.message));
    }
};

export const addCommentAction = (comment) => async (dispatch) => {
    dispatch(stateLoading(true));
    dispatch(resetError());
    try {
        const response = await addNewComment(comment);

        dispatch(addComment({ comment: response }));
    } catch (e) {
        dispatch(setError(e.message));
    } finally {
        dispatch(stateLoading(false));
    }
};

export const {
    setPosts,
    addPost,
    setCurrentPost,
    addComment,
    setPostComments,
    addLike,
} = postsReducer.actions;
export const postsSelector = (state) => state.posts.posts;
export const postSelector = (state) => state.posts.post;
export const commentsSelector = (state) => state.posts.comments;
