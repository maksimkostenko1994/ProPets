import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import {getCurrentUser} from "../../../services/userApi";

const RightNavBar = () => {

    const user = getCurrentUser()

    return (
        <div>
            {user && <Link to={'/profile'} className="user-profile-btn">
                {user.avatar ? <img src={user.avatar} alt="avatar"/> :
                    <div className="user-avatar"><FontAwesomeIcon size="2x" icon={faUser}/></div>}
                <h4>{user.full_name}</h4>
            </Link>}
            <Link to={'/'} className="user-logout-btn"><FontAwesomeIcon icon={faSignOutAlt}/>Logout</Link>
        </div>
    );
};

export default RightNavBar;