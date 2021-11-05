import Image from "../../../assets/img/dog2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { postsSelector } from "../../../store/post";
import TestImg from "../../../assets/img/dog3_full.png";
import { useHistory } from "react-router";
const PostFullInfo = () => {
    const posts = useSelector(postsSelector);
    const history = useHistory();
    const id = history.location.pathname.slice(15) - 1;
    console.log(posts);
    return (
        <div className="post">
            <div className="post-header">
                <div className="post-header-img">
                    <img src={Image} alt="dog" />
                </div>
                <div className="post-header-author">
                    <h3>author name</h3>
                    <p>{posts[id].createdAt}</p>
                </div>
            </div>
            <div className="post-body">
                <img className="post-img" src={TestImg} alt="dog" />
            </div>
            <div className="post-footer">
                <h4>{posts[id].title}</h4>
                <p>{posts[id].text}</p>
                <div className="post-footer-like-box">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <p>{posts[id].likes}</p>
                </div>
            </div>
        </div>
    );
};
export default PostFullInfo;
