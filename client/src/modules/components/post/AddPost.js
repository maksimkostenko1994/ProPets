import React from "react";
import Button from "../button/Button";
import { faPaw, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useDispatch, useSelector} from "react-redux";
import { userSelector } from "../../../store/app";
import "../../../sass/post_template/AddPost.scss";
import { addPostAction, postSelector } from "../../../store/post";
import { useForm, set } from "react-cool-form";
import * as yup from "yup";

const AddPost = () => {
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const post = useSelector(postSelector);

    const yupSchema = yup.object().shape({
        title: yup.string().min(2),
        text: yup.string().min(2),
        photo: yup.string(),
    });
    const validateWithYup = (schema) => async (values) => {
        let errors = {};
        try {
            await schema.validate(values, { abortEarly: false });
        } catch (yupError) {
            yupError.inner.forEach(({ path, message }) =>
                set(errors, path, message)
            );
        }
        return errors;
    };
    const { form, use } = useForm({
        defaultValues: post
            ? {
                  title: `${post.title}`,
                  text: `${post.text}`,
                  photo: `${post.photo}`,
              }
            : {
                  title: ``,
                  text: ``,
                  photo: ``,
              },
        validate: validateWithYup(yupSchema),
        onSubmit: (values, { reset }) => {
            dispatch(addPostAction(values));
            reset();
        },
    });
    const errors = use("errors", { errorWithTouched: true });

    return (
        <div className="add-post">
            <p className="title">
                Your new post! Simplify text, add photo and publish.
            </p>
            <hr />
            <form className="add-post-form" ref={form}>
                <label htmlFor="">Title</label>
                <input
                    placeholder="The quick, brown fox jumps"
                    name="title"
                    error={errors.title}
                />
                <label htmlFor="">Text:</label>
                <span>up to 1500 char</span>
                <textarea
                    name="text"
                    error={errors.textarea}
                    placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi deleniti possimus dolorem eius dolores et cumque alias corporis illo, iure molestias nam sint omnis vel."
                />
                <label htmlFor="upload-photo">Photo:</label>
                <input type="file" name="photo" error={errors.photo} />
                <div>
                    <div className="user-data-post">
                        {user && user.avatar ? (
                            <div className="user-avatar">
                                <img
                                    src={`http://localhost:5000/${user.avatar}`}
                                    alt="avatar"
                                />
                            </div>
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
