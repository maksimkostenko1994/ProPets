import { useDispatch, useSelector } from "react-redux";
import { getPostsAction, postsSelector } from "../../../store/post";
import Post from "./Post";
import styled from "styled-components";
import { useEffect } from "react";

const PostList = () => {
    const posts = useSelector(postsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsAction());
    }, [dispatch]);

    return posts.length === 0 ? (
        <h1>No Posts yet</h1>
    ) : (
        <PostsBox>
            {posts.rows.map((post) => (
                <li key={post.id}>
                    <Post post={post} />
                </li>
            ))}
        </PostsBox>
    );
};

export default PostList;

const PostsBox = styled.ul`
    padding-top: 40px;
    list-style: none;
`;
