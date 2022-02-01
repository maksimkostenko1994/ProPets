import "../../../sass/post_template/Post.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import moment from "moment";

const Post = ({ post }) => {
    const postTime = post.createdAt;
    const date = moment(postTime).format("D MMMM, HH:mm");

    return (
        <div className="post">
            <div className="post-header">
                {post.avatar ? (
                    <div className="post-header-img">
                        <img
                            src={`https://pro-pets-server.herokuapp.com/${post.avatar}`}
                            alt="user-avatar"
                        />
                    </div>
                ) : (
                    <div className="user-avatar">
                        <FontAwesomeIcon size="2x" icon={faUser} />
                    </div>
                )}

                <div className="post-header-author">
                    <h3>{post.full_name}</h3>
                    <p>{date}</p>
                </div>
            </div>
            <div className="post-body">
                <img
                    className="post-img"
                    src={`https://pro-pets-server.herokuapp.com/${post.photo}`}
                    alt="dog"
                />
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
                    <p>{post.count}</p>
                </div>
            </div>
        </div>
    );
};
export default Post;
