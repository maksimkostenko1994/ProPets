import "../../../sass/modal_template/ModalWindow.scss"
import Logo from "../logo/Logo";
import SignIn from "../signin/SignIn"
import SignUp from "../signup/SignUp";

import React, {useState} from "react";
import ModalFooter from "./ModalFooter";

const ModalWindow = ({closeModalWindow}) => {
    const [currentForm, setCurrentForm] = useState(true)

    const changeFormHandler = (event) => {
        event.preventDefault()
        const btns = document.querySelectorAll('.btn')
        btns.forEach(item => item.classList.remove("active"))
        event.target.classList.add("active")
        setCurrentForm(!currentForm)
    }


    return (
        <div className="modal-window">
            <div className="modal-window-body">
                <Logo color={""}/>
                <h5><span>Welcome! </span>Please sign in / sign up to continue or</h5>
                {/*Временные кнопки*/}
                <div className="nav-btns">
                    <button className="btn active" onClick={(event) => changeFormHandler(event)}>Sign in</button>
                    <button className="btn" onClick={(event) => changeFormHandler(event)}>Sign up</button>
                </div>
                {/*=================*/}
                {currentForm ? <SignIn/> : <SignUp/>}
                <ModalFooter closeModalWindow={closeModalWindow}/>
            </div>
        </div>
    )
}

export default ModalWindow