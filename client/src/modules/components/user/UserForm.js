import Button from "../button/Button";
import { faSave, faUser, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../sass/user_profile/userForm.scss";
import Field from "../forms/Field";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction, updateAction } from "../../../store/auth";
import { useForm, set } from "react-cool-form";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { userSelector } from "../../../store/app";
import { getCurrentUser } from "../../../services/userApi";

const UserForm = () => {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    const [userFullName, setUserName] = useState(user.full_name);
    const [petPhotoOld] = useState(user.pet_photo);
    const [avatarPhotoOld] = useState(user.avatar);

    const yupSchema = yup.object().shape({
        avatar: yup.string().nullable(),
        email: yup.string().email(),
        phone: yup.string().nullable(),
        user_pet: yup.string().nullable(),
        nick: yup.string().nullable(),
        pet_photo: yup.string().nullable(),
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
            avatar: user.avatar,
            email: user.email,
            phone: user.phone,
            user_pet: user.user_pet,
            nick: user.nick,
            pet_photo: user.pet_photo,
        },
        validate: validateWithYup(yupSchema),
        onSubmit: (values) => {
            const data = {
                id: user.id,
                full_name: userFullName,
                petPhotoOld: petPhotoOld,
                avatarPhotoOld: avatarPhotoOld,
                ...values,
            };

            if (
                user.full_name !== data.full_name ||
                user.email !== data.email ||
                user.avatar !== data.avatar ||
                user.phone !== data.phone ||
                user.user_pet !== data.user_pet ||
                user.nick !== data.nick ||
                user.pet_photo !== data.pet_photo
            ) {
                dispatch(updateAction(data, petPhotoOld, avatarPhotoOld));
            }
        },
    });

    useEffect(() => {
        dispatch(getUserAction(getCurrentUser().id));
    }, [dispatch]);

    const errors = use("errors", { errorWithTouched: true });

    const onChangeHandler = (e) => {
        setUserName(e.target.value);
    };

    return (
        user && (
            <div id="user-form">
                <h3>Your profile. Change, edit and manage your data.</h3>
                <hr />
                <div className="user-form-title">
                    <h2>My profile</h2>
                </div>
                <div className="user-form-header">
                    {user.avatar ? (
                        <div className="user-form-avatar">
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
                    <div className="user-form-full-name">
                        <Field
                            defaultValue={user.full_name}
                            className="user-full-name"
                            onChange={onChangeHandler}
                        />
                    </div>
                </div>
                {user && (
                    <form className="user-profile-form" ref={form} noValidate>
                        <div className="form-item-email">
                            <label>Email:</label>
                            <Field
                                name="email"
                                placeholder="Email"
                                error={errors.email}
                            />
                        </div>
                        <div className="form-item">
                            <label>Phone:</label>
                            <Field
                                name="phone"
                                placeholder="Phone"
                                error={errors.phone}
                            />
                        </div>
                        <div className="form-item">
                            <label>Avatar:</label>
                            <div className="avatar-container">
                                <Field
                                    error={errors.avatar}
                                    type="file"
                                    name="avatar"
                                    className="hide-input"
                                />
                                <input
                                    placeholder={user.avatar}
                                    name="avatar-hide"
                                    className="avatar-hide-input"
                                />
                            </div>
                        </div>
                        <div className="form-body">
                            <div className="form-body-items">
                                <div className="form-item">
                                    <label>My pet:</label>
                                    <Field
                                        name="user_pet"
                                        placeholder="My pet"
                                        className="label-pet"
                                        error={errors.user_pet}
                                    />
                                </div>
                                <div className="form-item">
                                    <label>Nick:</label>
                                    <Field
                                        name="nick"
                                        placeholder="Nick"
                                        className="label-nick"
                                        error={errors.nick}
                                    />
                                </div>
                                <div className="form-item">
                                    <label>Photo:</label>
                                    <div className="avatar-container">
                                        <Field
                                            placeholder="Photo"
                                            error={errors.pet_photo}
                                            type="file"
                                            name="pet_photo"
                                            className="hide-input"
                                        />
                                        <input
                                            placeholder={
                                                user.pet_photo || "Photo"
                                            }
                                            name="pet-photo-hide"
                                            className="avatar-hide-input"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-body-pet-img">
                                {user.pet_photo ? (
                                    <div className="user-pet-avatar">
                                        <img
                                            src={`http://localhost:5000/${user.pet_photo}`}
                                            alt="pet-icon"
                                        />
                                    </div>
                                ) : (
                                    <div className="user-pet-photo">
                                        <FontAwesomeIcon icon={faPaw} />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="form-footer">
                            <Button
                                text="save changes"
                                icon={faSave}
                                color={"btn"}
                                className="form-save-btn"
                                name="update"
                            />
                        </div>
                    </form>
                )}
            </div>
        )
    );
};

export default UserForm;
