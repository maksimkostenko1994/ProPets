import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComments } from "@fortawesome/free-regular-svg-icons";
import "../../sass/form_template/form.scss";
import "../../sass/comment_template/comment_template.scss";

const Comment = ({ comment }) => {
    return (
        <div className='comment-container'>
            <h4>Comments</h4>
            <hr/>
            <h5>Author| Date</h5>
            <p>comment text</p>
            <textarea placeholder='type your comment' />
            <div className='comment-btn'>
            <FontAwesomeIcon icon={faComments} />
            <button>add comments</button>
            </div>
        </div>
    )
}
export default Comment;