import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faUser, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useParams, Link } from "react-router-dom";
import {
    addDislikeAction,
    addLikeAction,
    getPostAction,
    postSelector,
} from "../../../store/post";
import { useDispatch, useSelector } from "react-redux";
import "./../../../sass/post_template/PostFullInfo.scss";
import Comment from "./Comment";
import { useEffect } from "react";
import moment from "moment";

import AddComment from "./AddComment";
import { userSelector } from "../../../store/app";
import Button from "../button/Button";
import {
    paginationSelector,
    setCurrentPageAction,
} from "../../../store/pagination";

const PostFullInfo = () => {
    const post = useSelector(postSelector);
    const user = useSelector(userSelector);

    const { currentPage, pages, limit } = useSelector(paginationSelector);

    const pagesArr = (number) => {
        const res = [];
        for (let i = 1; i <= number; i++) res.push(i);
        return res;
    };

    const dispatch = useDispatch();
    const like = post && post.likes.find((like) => like.userId === user.id);
    const { id } = useParams();
    useEffect(() => {
        dispatch(getPostAction(id, currentPage, limit));
    }, [dispatch, id, currentPage, limit]);

    const date = post ? moment(post.createdAt).format("D MMMM, HH:mm") : false;

    const isLiked =
        post && post.likes.find((like) => like.userId === user.id) && true;

    return (
        post && (
            <div className="fullPost">
                <div className="fullPost-header">
                    <div className="full-Post-header-left">
                        {post.avatar ? (
                            <div className="fullPost-header-img">
                                <img
                                    src={`http://localhost:5000/${post.avatar}`}
                                    alt="user-avatar"
                                />
                            </div>
                        ) : (
                            <div className="fullPost-header-img">
                                <FontAwesomeIcon size="2x" icon={faUser} />
                            </div>
                        )}
                        <div className="fullPost-header-author">
                            <h3>{post.full_name}</h3>
                            <p>{date ? date : ""}</p>
                        </div>
                    </div>
                    <div className="fullPost-header-button">
                        <Link to="/posts">
                            <Button text="back to posts" color="btn" />
                        </Link>
                    </div>
                </div>
                <div className="fullPost-body">
                    <img
                        className="fullPost-img"
                        src={`http://localhost:5000/${post.photo}`}
                        alt="dog"
                    />
                </div>
                <div className="fullPost-footer">
                    <h4>{post.title}</h4>
                    <p className="fullPost-post-text">{post.text}</p>
                    <div className="fullPost-footer-like-box">
                        <p>{post.count}</p>
                        {!isLiked ? (
                            <>
                                <FontAwesomeIcon icon={faThumbsUp} />
                                <button
                                    onClick={() =>
                                        dispatch(
                                            addLikeAction(post.id, user.id)
                                        )
                                    }
                                >
                                    add like
                                </button>
                            </>
                        ) : (
                            <>
                                <FontAwesomeIcon icon={faThumbsDown} />
                                <button
                                    onClick={() =>
                                        dispatch(addDislikeAction(like))
                                    }
                                >
                                    add dislike
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div className="comments">
                    <p className="comments-p">Comments</p>
                    <hr />
                    <div className="service-pagination">
                        {pagesArr(pages).map((item) => (
                            <p
                                id={item}
                                onClick={(event) => {
                                    dispatch(setCurrentPageAction(item));
                                    event.target.classList.add(
                                        "service-active-link"
                                    );
                                    Array.from(
                                        event.target.parentNode.children
                                    ).map((link) =>
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
                    <hr />
                    {post.comments.length === 0 ? (
                        <h3>No comments yet</h3>
                    ) : (
                        <div>
                            {post.comments.map((comment, index) => (
                                <li key={index}>
                                    <Comment comment={comment} />
                                </li>
                            ))}
                        </div>
                    )}
                </div>
                <AddComment />
            </div>
        )
    );
};
export default PostFullInfo;
