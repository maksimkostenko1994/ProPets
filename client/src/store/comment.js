import { createSlice } from "@reduxjs/toolkit";
import { addNewComment } from "../services/commentApi";
import { stateLoading } from "./app";
import { resetError, setError } from "./auth";
import { getPostAction } from "./post";

const initialState = {
    comments: [],
};

const commentsReducer = createSlice({
    name: "comments",
    initialState,
    reducers: {
        setPostComments: (state, { payload }) => {
            state.comments = payload;
        },
        addComment: (state, { payload }) => {
            state.comments.push(payload);
        },
    },
});
export default commentsReducer.reducer;

export const { setPostComments, addComment } = commentsReducer.actions;
export const commentsSelector = (state) => state.comments.comments;

export const addCommentAction = (comment) => async (dispatch) => {
    dispatch(resetError());
    try {
        const response = await addNewComment(comment);
        dispatch(addComment(response));
        dispatch(getPostAction(response.postId));
    } catch (e) {
        dispatch(setError(e.message));
    } finally {
        dispatch(stateLoading(false));
    }
};
