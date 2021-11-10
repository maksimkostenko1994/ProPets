import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import {logoutAction} from "../../../store/auth";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../../../store/app";

const RightNavBar = () => {
    const user = useSelector(userSelector);

    const dispatch = useDispatch();
    const [firstName, secondName] = user.full_name.split(" ");

    return (
        <div className="right-nav-bar">
            <div className="right-nav-user">
                {user && (
                    <Link to={"/profile"} className="user-profile-btn">
                        {user.avatar ? (
                            <div className="user-avatar">
                                <img src={`http://localhost:5000/${user.avatar}`} alt="avatar"/>
                            </div>
                        ) : (
                            <div className="user-avatar">
                                <FontAwesomeIcon size="2x" icon={faUser}/>
                            </div>
                        )}
                        <h4>
                            {firstName} <br/>
                            {secondName}
                        </h4>
                    </Link>
                )}
            </div>
            <Link
                to={"/"}
                onClick={() => dispatch(logoutAction())}
                className="user-logout-btn"
            >
                <FontAwesomeIcon icon={faSignOutAlt}/>
                Logout
            </Link>
        </div>
    );
};

export default RightNavBar;
