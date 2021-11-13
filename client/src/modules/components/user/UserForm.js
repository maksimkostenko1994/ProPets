import Button from "../button/Button";
import {
    faSave,
    faPencilAlt,
    faUser,
    faPaw,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../sass/user_profile/userForm.scss";
import Field from "../forms/Field";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../store/app";
import { updateAction } from "../../../store/auth";
import { useForm, set } from "react-cool-form";
import * as yup from "yup";

const UserForm = () => {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    const yupSchema = yup.object().shape({
        full_name: yup.string(),
        avatar: yup.string(),
        email: yup.string().email(),
        phone: yup.string(),
        user_pet: yup.string(),
        nick: yup.string(),
        pet_photo: yup.string(),
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
        defaultValues: user
            ? {
                  full_name: `${user.full_name}`,
                  avatar: `${user.avatar}`,
                  email: `${user.email}`,
                  phone: `${user.phone}`,
                  user_pet: `${user.user_pet}`,
                  nick: `${user.nick}`,
                  pet_photo: `${user.pet_photo}`,
              }
            : {
                  full_name: ``,
                  avatar: ``,
                  email: `${"email"}`,
                  phone: `${"phone"}`,
                  user_pet: `${"user_pet"}`,
                  nick: `${"pet_nick"}`,
                  pet_photo: `${"pet_avatar"}`,
              },

        validate: validateWithYup(yupSchema),
        onSubmit: (values) => {
            const data = { id: user.id, ...values };
            dispatch(updateAction(data));
        },
    });
    const errors = use("errors", { errorWithTouched: true });

    return (
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
                    <h3>{user.full_name}</h3>
                </div>

                <button className="user-form-edit-btn" name="changeName">
                    <FontAwesomeIcon icon={faPencilAlt} />
                </button>
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
                        <Field
                            name="avatar"
                            placeholder="Avatar"
                            error={errors.avatar}
                            type="file"
                        />
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
                                <Field
                                    name="pet_photo"
                                    placeholder="Photo"
                                    error={errors.pet_photo}
                                    type="file"
                                />
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
    );
};

export default UserForm;
