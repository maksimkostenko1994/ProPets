import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import {getCurrentUser} from "../../../services/userApi";
import {logoutAction} from "../../../store/auth";
import {useDispatch} from "react-redux";

const RightNavBar = () => {

    const user = getCurrentUser()
    const dispatch = useDispatch()

    return (
        <div>
            {user && <Link to={'/profile'} className="user-profile-btn">
                {user.avatar ? <img src={user.avatar} alt="avatar"/> :
                    <div className="user-avatar"><FontAwesomeIcon size="2x" icon={faUser}/></div>}
                <h4>{user.full_name}</h4>
            </Link>}
            <Link to={'/'} onClick={() => dispatch(logoutAction())} className="user-logout-btn"><FontAwesomeIcon icon={faSignOutAlt}/>Logout</Link>
        </div>
    );
};

export default RightNavBar;