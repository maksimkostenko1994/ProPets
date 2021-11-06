import { useDispatch, useSelector } from "react-redux";
import { getPostsAction, postsSelector } from "../../../store/post";
import Post from "./Post";
import styled from "styled-components";
import { useEffect } from "react";
import { userSelector } from "../../../store/app";
import { getUser } from "../../../store/auth";

const PostList = () => {
    const posts = useSelector(postsSelector);
    const user = useSelector(userSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getPostsAction());
    }, [dispatch]);

    return posts.length === 0 ? (
        <h1>No Posts yet</h1>
    ) : (
        <PostsBox>
            {posts.map((post) => (
                <li key={post.id}>{<Post post={post} user={user} />}</li>
            ))}
        </PostsBox>
    );
};

export default PostList;

const PostsBox = styled.ul`
    padding-top: 40px;
    list-style: none;
`;
