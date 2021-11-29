import React, {useState} from "react";
import Button from "../button/Button";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {authSelector} from "../../../store/app";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleDown, faPaw, faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";
import Logo from "../logo/Logo";
import {petsSelector} from "../../../store/pet";

export default function MainPageNav() {
    const auth = useSelector(authSelector);
    const {pathname} = useLocation();
    const path = pathname.slice(1);
    const {pets} = useSelector(petsSelector)

    const [dropState, setDropState] = useState(false)

    const dropDownHandler = () => {
        setDropState(!dropState)
    }

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
                        {window.innerWidth < 518 ?
                            <div className="nav-bar-drop-down">
                                {((path === "lost" || path === "found") && pets) ? (
                                    <>
                                        <div className="drop-down-visible" onClick={dropDownHandler}>
                                            <FontAwesomeIcon size="1x" icon={faArrowCircleDown}/>Menu
                                        </div>
                                        {dropState &&
                                        <div className="drop-down-hidden">
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
                                        </div>
                                        }
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
                            </div> :
                            <div
                                style={{
                                    width: window.innerWidth < 551 ? "290px" : "320px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    flexDirection: "row-reverse"
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
                            </div>}
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
