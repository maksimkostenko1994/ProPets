import React from "react";
import Button from "../button/Button";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {authSelector} from "../../../store/app";

import {faPaw, faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";
import Logo from "../logo/Logo";
import {petsSelector} from "../../../store/pet";

export default function MainPageNav() {
    const auth = useSelector(authSelector);
    const {pathname} = useLocation();
    const path = pathname.slice(1);
    const {pets} = useSelector(petsSelector)

    return (
        <div
            id="top"
            className="navMainPage"
            style={{
                background:
                    auth ||
                    path === "found" ||
                    path === "lost" ||
                    path.startsWith("pet/")
                        ? "snow"
                        : "#06B2BB",
            }}
        >
            <div className="navContainer">
                {auth ? (
                    <Link to="/posts">
                        <Logo color={"textColor"}/>
                    </Link>
                ) : path === "found" ||
                path === "lost" ||
                path.startsWith("pet/") ? (
                    <Link to="/" className="logo">
                        <Logo color={"textColor"}/>
                    </Link>
                ) : (
                    <Link to="/">
                        <Logo color={"whiteText"}/>
                    </Link>
                )}
                {auth ? (
                    <>
                        <div
                            style={{
                                width: "320px",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            {((path === "lost" || path === "found") && pets) ? (
                                <>
                                {pets.access && <Link to="/lost/add">
                                        <Button
                                            text={"I lost my pet"}
                                            icon={faSearch}
                                            color={"redBtn"}
                                        />
                                    </Link>}
                                    <Link to="/found/add">
                                        <Button
                                            text={"I found a pet"}
                                            icon={faPaw}
                                            color={"btn"}
                                        />
                                    </Link>
                                </>
                            ) : (
                                <>
                                    {path === "posts" && (
                                        <Link to="/posts/add">
                                            <Button
                                                text={"Add new"}
                                                icon={faPlus}
                                                color={"btn"}
                                            />
                                        </Link>
                                    )}
                                    {path.startsWith("services") && (
                                        <Link to="/services/add">
                                            <Button
                                                text={"Add service"}
                                                icon={faPlus}
                                                color={"btn"}
                                            />
                                        </Link>
                                    )}
                                </>
                            )}
                        </div>
                    </>
                ) : path === "found" ||
                path === "lost" ||
                path.startsWith("pet/") ? (
                    <></>
                ) : (
                    <Link to="/signin">
                        <Button color="btn" text="Sign in"/>
                    </Link>
                )}
            </div>
        </div>
    );
}
