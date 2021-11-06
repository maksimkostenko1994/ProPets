import "../../../sass/post_template/Comment.scss";
const Comment = ({ comment }) => {
    return (
        <div className="user-comment">
            <h5>Author| Date</h5>
            <p>comment text</p>
        </div>
    );
};
export default Comment;
