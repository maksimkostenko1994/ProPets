import { useDispatch, useSelector } from "react-redux";
import { getPostsAction, postsSelector } from "../../../store/post";
import Post from "./Post";
import styled from "styled-components";
import { useEffect } from "react";
import {
    paginationSelector,
    setCurrentPageAction,
} from "../../../store/pagination";

const PostList = () => {
    const { currentPage, limit, pages } = useSelector(paginationSelector);
    const posts = useSelector(postsSelector);
    const pagesArr = (number) => {
        const res = [];
        for (let i = 1; i <= number; i++) res.push(i);
        return res;
    };
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsAction(currentPage, limit));
    }, [dispatch, currentPage, limit]);

    return posts.length === 0 ? (
        <h1>No Posts yet</h1>
    ) : (
        <PostsBox>
            <div className="service-pagination">
                {pagesArr(pages).map((item) => (
                    <p
                        id={item}
                        onClick={(event) => {
                            dispatch(setCurrentPageAction(item));
                            event.target.classList.add("service-active-link");
                            Array.from(event.target.parentNode.children).map(
                                (link) =>
                                    event.target.id !== link.id
                                        ? link.classList.remove(
                                              "service-active-link"
                                          )
                                        : ""
                            );
                        }}
                        key={item}
                    >
                        {item}
                    </p>
                ))}
            </div>
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
