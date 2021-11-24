import React, { useState } from "react";
import Button from "../button/Button";
import { faPaw, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../store/app";
import "../../../sass/post_template/AddPost.scss";
import { addPostAction } from "../../../store/post";
import { useForm, set } from "react-cool-form";
import * as yup from "yup";
import Field from "../forms/Field";
import TextArea from "../forms/TextArea";

const AddPost = () => {
    const [file, loadFile] = useState(null);

    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const yupSchema = yup.object().shape({
        title: yup.string().min(2),
        text: yup.string().min(2),
        photo: yup.string().required(),
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
        defaultValues: {
            title: ``,
            text: ``,
            photo: ``,
        },
        validate: validateWithYup(yupSchema),
        onSubmit: (values, { reset }) => {
            dispatch(addPostAction({ ...values, userId: user.id }));
            reset();
        },
    });

    const errors = use("errors", { errorWithTouched: true });

    const onChangeHandler = ({ target }) => {
        loadFile(target.value);
    };
    return (
        <div className="add-post">
            <h3 className="title">
                Your new post! Simplify text, add photo and publish.
            </h3>
            <hr />
            <div className="post-container">
                <form className="add-post-form" ref={form}>
                    <label className="label">Title:</label>

                    <Field
                        placeholder="The quick, brown fox jumps"
                        name="title"
                        error={errors.title}
                    />

                    <label className="label">Text:</label>
                    <span>up to 1500 char</span>
                    <TextArea
                        name="text"
                        error={errors.textarea}
                        placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi deleniti possimus dolorem eius dolores et cumque alias corporis illo, iure molestias nam sint omnis vel."
                    />

                    <input
                        type="file"
                        id="upload-photo"
                        name="photo"
                        onChange={onChangeHandler}
                        className="add-photo-fake"
                    />
                    <div className="add-photo-section">
                        <label className="add-photo-btn" htmlFor="upload-photo">
                            Add photo
                        </label>
                        <Field
                            defaultValue={file}
                            error={errors.photo}
                            name="photo"
                            disabled
                        />
                    </div>

                    <div className="form-footer-section">
                        <div className="form-footer-avatar-section">
                            {user && user.avatar ? (
                                <div className="add-post-user-avatar">
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
        </div>
    );
};

export default AddPost;
