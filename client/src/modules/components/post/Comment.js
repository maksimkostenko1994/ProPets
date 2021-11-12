import "../../../sass/post_template/Comment.scss";

const Comment = ({ comment }) => {
    console.log(comment);
    return (
        <div className="user-comment">
            <span>Author | Date</span>
            <p></p>
        </div>
    );
};
export default Comment;
