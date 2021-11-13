import moment from "moment";
import "../../../sass/post_template/Comment.scss";

const Comment = ({ comment }) => {
    const postTime = comment.createdAt;
    const date = moment(postTime).format("D MMMM, HH:mm");
    return (
        <div className="user-comment">
            <span>
                {comment.user.full_name} | {date}
            </span>
            <p>{comment.text}</p>
        </div>
    );
};
export default Comment;
