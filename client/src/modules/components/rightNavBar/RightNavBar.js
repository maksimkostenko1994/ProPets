import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import {logoutAction} from "../../../store/auth";
import {useDispatch, useSelector} from "react-redux";
import {appSelector, userSelector} from "../../../store/app";
import ArrowUp from "../arrowUp/ArrowUp";

const RightNavBar = () => {
    const user = useSelector(userSelector);
    const {auth} = useSelector(appSelector);

    const dispatch = useDispatch();
    const [firstName, secondName] = user ? user.full_name.split(" ") : ["", ""];

    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        const upBtn = document.querySelector(".upBtn");
        if (fetching) {
            upBtn.style.opacity = 1;
        }
        if (!fetching) {
            upBtn.style.opacity = 0;
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function () {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollTop > 70) {
            setFetching(true)
        } else {
            // if (
            //     e.target.documentElement.scrollHeight -
            //     (e.target.documentElement.scrollTop + window.innerHeight) <
            //     100
            // ) {
            //     setFetching(true);
            // }
            // if (
            //     e.target.documentElement.scrollHeight -
            //     (e.target.documentElement.scrollTop + window.innerHeight) >
            //     0
            // ) {
            setFetching(false);
        }
    };

    return (
        <div className="right-nav-bar">
            {auth && (
                <>
                    <div className="right-nav-user">
                        {user && (
                            <Link to={"/profile"} className="user-profile-btn">
                                {user.avatar ? (
                                    <div className="user-avatar">
                                        <img
                                            src={`http://localhost:5000/${user.avatar}`}
                                            alt="avatar"
                                        />
                                    </div>
                                ) : (
                                    <div className="user-avatar">
                                        <FontAwesomeIcon
                                            size="2x"
                                            icon={faUser}
                                        />
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
                    <a href="" className="upBtn" id="upBtn" onClick={(e) => {
                        e.preventDefault()
                        document.documentElement.scrollTop = 0
                    }}>
                        <ArrowUp className="arrowUp1"/>
                        <ArrowUp className="arrowUp2"/>
                        <ArrowUp className="arrowUp3"/>
                    </a>
                </>
            )}
        </div>
    );
};

export default RightNavBar;
