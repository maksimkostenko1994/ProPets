import "./../../../sass/post_template/AddComment.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { useForm } from "react-cool-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { userSelector } from "../../../store/app";
import { addCommentAction } from "../../../store/comment";

const AddComment = () => {
    const user = useSelector(userSelector);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { form } = useForm({
        defaultValues: {
            text: ``,
            postId: `${id}`,
            userId: `${user.id}`,
        },
        onSubmit: (values, { reset }) => {
            dispatch(addCommentAction(values));
            reset();
        },
    });

    return (
        <div className="add-comment-container">
            <form ref={form} className="add-comment-form">
                <textarea
                    placeholder="type your comment"
                    className="commentArea"
                    rows={3}
                    name="text"
                />
                <div className="comment-footer">
                    <FontAwesomeIcon icon={faComments} />
                    <button>add comments</button>
                </div>
            </form>
        </div>
    );
};
export default AddComment;
