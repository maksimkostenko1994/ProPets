import React, { useEffect } from "react";
import Button from "../button/Button";
import { faPaw, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../store/auth";
import { userSelector } from "../../../store/app";
import "../../../sass/post_template/AddPost.scss";

const AddPost = () => {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);
    return (
        <div className="add-post">
            <p className="title">
                Your new post! Simplify text, add photo and publish.
            </p>
            <hr />
            <form className="add-post-form">
                <label htmlFor="">Title</label>
                <input type="text" placeholder="The quick, brown fox jumps" />
                <label htmlFor="">Text:</label>
                <span>up to 1500 char</span>
                <textarea placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi deleniti possimus dolorem eius dolores et cumque alias corporis illo, iure molestias nam sint omnis vel." />
                <label htmlFor="upload-photo">Photo:</label>
                <input type="file" name="photo" id="upload-photo" />
                <div>
                    <div className="user-data-post">
                        {user && user.avatar ? (
                            <img src={user.avatar} alt="avatar" />
                        ) : (
                            <div className="user-avatar">
                                <FontAwesomeIcon size="2x" icon={faUser} />
                            </div>
                        )}
                        {user && user.full_name}
                    </div>
                    <Button text={"Publish"} color={"btn"} icon={faPaw} />
                </div>
            </form>
        </div>
    );
};

export default AddPost;
