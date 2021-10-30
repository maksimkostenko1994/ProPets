import Image from "../../../assets/img/dog2.png"
import Image2 from '../../../assets/img/dog3_full.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import "../../../sass/post_template/Post-full-info.scss"
import Comment from './Comment';
const PostFullInfo = ({post}) => {

    return (
        <div className='post'>
            <div className='post-header'>
                <div className='post-left'>
                    <img className='logo-img' src={Image} alt='dog' />
                    </div>
                <div>
                    <h3>{ post.author}</h3>
                    <p>{post.date}</p>
                    </div>
            </div>
            <div>
                <img className='post-img' src={Image2}alt='dog'/>
            </div>
            <div className='post-full-info-footer'>
                <h4>{ post.title}</h4>
                <p>{ post.content}</p>
                <div className='add-like-btn-box'>
                    <p>{ post.like}</p>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <button>add like</button>
                </div>
            </div>
            <Comment/>
        </div>
    )
}
export default PostFullInfo