import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import "../../sass/post_template/Post.scss"
import Image2 from '../../assets/img/dog3_full.png'
import { PostContext } from "../post/Content";
import { useContext } from "react";

const Post = ({ post }) => {
    const {changeCurrentPost}=useContext(PostContext)
            return (
                    <div className='post'>
                        <div className='post-header'>
                            <div className='post-left'>
                                <img className='logo-img' src={post.img} alt='dog' />
                            </div>
                            <div>
                                <h3>{post.author}</h3>
                                <p>{post.date}</p>
                            </div>
                        </div>
                        <div>
                            <img className='post-img' src={Image2} alt='dog' />
                        </div>
                        <div className='post-footer'>
                            <h4>{post.title}</h4>
                            <button onClick={() => changeCurrentPost(post.id)}>...more</button>
                            <div className='post-like-box'>
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <p>{post.like}</p>
                            </div>
                        </div>
                    </div>
                )
}
export default Post