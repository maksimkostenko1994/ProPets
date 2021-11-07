import Image from "../../../assets/img/dog2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComments } from "@fortawesome/free-regular-svg-icons";
import TestImg from "../../../assets/img/dog3_full.png";
import { useParams } from "react-router-dom";
import { getPostAction, postSelector } from "../../../store/post";
import { useDispatch, useSelector } from "react-redux";
import "./../../../sass/post_template/PostFullInfo.scss";
import Comment from "./Comment";
import { useEffect } from "react";

const PostFullInfo = () => {
    const post = useSelector(postSelector);
    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(getPostAction(id));
    }, [dispatch, id]);

    return (
        post && (
            <div className="fullPost">
                <div className="fullPost-header">
                    <div className="fullPost-header-img">
                        <img src={Image} alt="dog" />
                    </div>
                    <div className="fullPost-header-author">
                        <h3>author name</h3>
                        <p>{post.createdAt}</p>
                    </div>
                </div>
                <div className="fullPost-body">
                    <img className="fullPost-img" src={TestImg} alt="dog" />
                </div>
                <div className="fullPost-footer">
                    <h4>{post.title}</h4>
                    <p>{post.text}</p>
                    <div className="fullPost-footer-like-box">
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <p>{post.likes}</p>
                    </div>
                </div>
                <div className="comments">
                    <p className="comments-p">Comments</p>
                    <hr />
                    <Comment />
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
