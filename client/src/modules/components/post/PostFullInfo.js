import Image from "../../../assets/img/dog2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComments } from "@fortawesome/free-regular-svg-icons";
import TestImg from "../../../assets/img/dog3_full.png";
import { useHistory } from "react-router";
import { postsSelector } from "../../../store/post";
import { useSelector } from "react-redux";
import "./../../../sass/post_template/PostFullInfo.scss";
import Comment from "./Comment";

const PostFullInfo = () => {
    const post = useSelector(postsSelector);
    const history = useHistory();
    const id = history.location.pathname.slice(15) - 1;

    return (
        <div className="fullPost">
            <div className="fullPost-header">
                <div className="fullPost-header-img">
                    <img src={Image} alt="dog" />
                </div>
                <div className="fullPost-header-author">
                    <h3>author name</h3>
                    <p>{post[id].createdAt}</p>
                </div>
            </div>
            <div className="fullPost-body">
                <img className="fullPost-img" src={TestImg} alt="dog" />
            </div>
            <div className="fullPost-footer">
                <h4>{post[id].title}</h4>
                <p>{post[id].text}</p>
                <div className="fullPost-footer-like-box">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <p>{post[id].likes}</p>
                </div>
            </div>
            <div className="comments">
                <p className="comments-p">Comments</p>
                <hr></hr>
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
    );
};
export default PostFullInfo;
