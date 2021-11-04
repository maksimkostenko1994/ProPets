import Button from "../button/Button";
import { faSave, faPencilAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../sass/user_profile/userForm.scss";
import Field from "../forms/Field";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../store/app";
import { useEffect } from "react";
import { getUser, updateAction } from "../../../store/auth";
import { useForm, set } from "react-cool-form";
import * as yup from "yup";

const UserForm = () => {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    console.log(user);
    const yupSchema = yup.object().shape({
        full_name: yup.string().min(2).required(),
        avatar: yup.string().min(2).required(),
        email: yup.string().email().required(),
        phone: yup.number().min(6).required(),
        user_pet: yup.string().min(2).required(),
        nick: yup.string().min(2).required(),
        pet_photo: yup.string().min(2).required(),
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
                  email: ``,
                  phone: ``,
                  user_pet: ``,
                  nick: ``,
                  pet_photo: ``,
              },

        validate: validateWithYup(yupSchema),
        onSubmit: (values) => {
            dispatch(updateAction({ ...values, id: user.id }));
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
            {user && (
                <form className="user-profile-form" ref={form} noValidate>
                    <div className="user-form-header">
                        {user.avatar ? (
                            <div className="user-avatar">
                                <img
                                    src={`http://localhost:5000/${user.avatar}`}
                                    alt="avatar"
                                />
                            </div>
                        ) : (
                            <div className="user-avatar">
                                <FontAwesomeIcon size="3x" icon={faUser} />
                            </div>
                        )}
                        <h3>{user.full_name}</h3>
                        <button className="user-form-edit-btn">
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </button>
                    </div>
                    <div className="form-item">
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
                            <img
                                src={`http://localhost:5000/${user.pet_photo}`}
                                alt="pet-icon"
                            />
                        </div>
                    </div>
                    <div className="form-footer">
                        <Button
                            text="save changes"
                            icon={faSave}
                            color={"btn"}
                            className="form-save-btn"
                        ></Button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default UserForm;
