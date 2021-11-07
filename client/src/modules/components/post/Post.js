import "../../../sass/post_template/Post.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import TestImg from "../../../assets/img/dog3_full.png";
import { NavLink } from "react-router-dom";
import moment from "moment";

const Post = ({ post }) => {
    const postTime = post.createdAt;
    const date = moment(postTime).format("D MMMM, HH:MM");

    return (
        <div className="post">
            <div className="post-header">
                <div className="post-header-img">
                    <img src="" alt="user-avatar" />
                </div>
                <div className="post-header-author">
                    <h3>{post.full_name}</h3>
                    <p>{date}</p>
                </div>
            </div>
            <div className="post-body">
                <img className="post-img" src={TestImg} alt="dog" />
            </div>
            <div className="post-footer">
                <h4>{post.title}</h4>
                <NavLink
                    to={`/postsFullInfo/${post.id}`}
                    className="post-footer-more"
                >
                    ...more
                </NavLink>
                <div className="post-footer-like-box">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <p>{post.likes}</p>
                </div>
            </div>
        </div>
    );
};
export default Post;

//  src={`http://localhost:5000/${user.avatar}`}
