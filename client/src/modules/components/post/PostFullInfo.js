import Image from "../../../assets/img/dog2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { postsSelector } from "../../../store/post";
import TestImg from "../../../assets/img/dog3_full.png";
const PostFullInfo = () => {
    const posts = useSelector(postsSelector);
    console.log(posts);
    return (
        <div className="post">
            <div className="post-header">
                <div className="post-header-img">
                    <img src={Image} alt="dog" />
                </div>
                <div className="post-header-author">
                    <h3>post.author</h3>
                    <p>post.date</p>
                </div>
            </div>
            <div className="post-body">
                <img className="post-img" src={TestImg} alt="dog" />
            </div>
            <div className="post-footer">
                <h4>{posts.title}</h4>
                <div className="post-footer-like-box">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <p>{posts.likes}</p>
                </div>
            </div>
        </div>
    );
};
export default PostFullInfo;
