import Button from "../button/Button";
import { faSave, faPencilAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../sass/user_profile/userForm.scss";
import Field from "../forms/Field";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../store/app";
import { useEffect } from "react";
import { getUser } from "../../../store/auth";
import DogImg from "../../../assets/img/dog1_min.png";

const UserForm = () => {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();
    console.log(user);
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    return (
        <div id="user-form">
            <h3>Your profile. Change, edit and manage your data.</h3>
            <hr />
            <div className="user-form-title">
                <h2>My profile</h2>
            </div>
            <form className="user-profile-form">
                <div className="user-form-header">
                    {user && user.avatar ? (
                        <div className="user-avatar">
                            <img src={user.avatar} alt="avatar" />
                        </div>
                    ) : (
                        <div className="user-avatar">
                            <FontAwesomeIcon size="3x" icon={faUser} />
                        </div>
                    )}
                    <h3>user name</h3>
                    <button className="user-form-edit-btn">
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </button>
                </div>
                <div className="form-item">
                    <label>Email:</label>
                    <Field name="email" type="email" placeholder="Email" />
                </div>
                <div className="form-item">
                    <label>Phone:</label>
                    <Field name="phone" type="phone" placeholder="Phone" />
                </div>
                <div className="form-item">
                    <label>Avatar:</label>
                    <Field name="avatar" type="img" placeholder="Avatar" />
                </div>
                <div className="form-body">
                    <div className="form-body-items">
                        <div className="form-item">
                            <label>My pet:</label>
                            <Field
                                name="myPet"
                                type="text"
                                placeholder="My pet"
                                className="label-pet"
                            />
                        </div>
                        <div className="form-item">
                            <label>Nick:</label>
                            <Field
                                name="nick"
                                type="text"
                                placeholder="Nick"
                                className="label-nick"
                            />
                        </div>
                        <div className="form-item">
                            <label>Photo:</label>
                            <Field
                                name="photo"
                                type="img"
                                placeholder="Photo"
                            />
                        </div>
                    </div>
                    <div className="form-body-pet-img">
                        <img src={DogImg} alt="pet-icon" />
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
        </div>
    );
};

export default UserForm;
