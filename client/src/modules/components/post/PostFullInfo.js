import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComments } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import {
    commentsSelector,
    getPostAction,
    postSelector,
} from "../../../store/post";
import { useDispatch, useSelector } from "react-redux";
import "./../../../sass/post_template/PostFullInfo.scss";
import Comment from "./Comment";
import { useEffect } from "react";
import moment from "moment";

const PostFullInfo = () => {
    const post = useSelector(postSelector);
    const comments = useSelector(commentsSelector);
    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(getPostAction(id));
    }, [dispatch, id]);

    const date = post ? moment(post.createdAt).format("D MMMM, HH:mm") : false;

    return (
        post && (
            <div className="fullPost">
                <div className="fullPost-header">
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
                <div className="fullPost-body">
                    <img
                        className="fullPost-img"
                        src={`http://localhost:5000/${post.photo}`}
                        alt="dog"
                    />
                </div>
                <div className="fullPost-footer">
                    <h4>{post.title}</h4>
                    <p>{post.text}</p>
                    <div className="fullPost-footer-like-box">
                        <p>{post.count}</p>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <button>add like</button>
                    </div>
                </div>
                <div className="comments">
                    <p className="comments-p">Comments</p>
                    <hr />
                    {comments.length === 0 ? (
                        <h3>No comments yet</h3>
                    ) : (
                        <div>
                            {comments.map((comment, index) => (
                                <li key={index}>
                                    <Comment comment={comment} />
                                </li>
                            ))}
                        </div>
                    )}
                </div>
                <textarea
                    placeholder="type your comment"
                    className="commentArea"
                    rows={3}
                />
                <div className="comment-footer">
                    <FontAwesomeIcon icon={faComments} />
                    <button>add comments</button>
                </div>
            </div>
        )
    );
};
export default PostFullInfo;
