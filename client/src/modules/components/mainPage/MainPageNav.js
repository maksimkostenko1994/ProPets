import React from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../../../store/app";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Logo from "../logo/Logo";
import { getCurrentUser } from "../../../services/userApi";

export default function MainPageNav() {
    const auth = useSelector(authSelector);

    const currentUser = getCurrentUser();

    return (
        <div
            id="top"
            className="navMainPage"
            style={{
                background: auth && "snow",
            }}
        >
            <div className="navContainer">
                {auth ? (
                    <Link to="/posts">
                        <Logo color={"textColor"} />
                    </Link>
                ) : (
                    <Link to="/" className="logo">
                        <Logo color={"whiteText"} />
                    </Link>
                )}
                {auth ? (
                    <>
                        <div
                            style={{
                                width: "300px",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Link to="/posts/add">
                                <Button
                                    text={"Add new"}
                                    icon={faPlus}
                                    color={"btn"}
                                />
                            </Link>
                            {currentUser.role === "ADMIN" && (
                                <Link to="/services/add">
                                    <Button
                                        text={"Add service"}
                                        icon={faPlus}
                                        color={"btn"}
                                    />
                                </Link>
                            )}
                        </div>
                    </>
                ) : (
                    <Link to="/signin">
                        <Button color="btn" text="Sign in" />
                    </Link>
                )}
            </div>
        </div>
    );
}
