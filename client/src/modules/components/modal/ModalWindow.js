import "../../../sass/modal_template/ModalWindow.scss"
import Logo from "../logo/Logo";
import SignIn from "../signin/SignIn"
import SignUp from "../signup/SignUp";

import {useState} from "react";

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
                <button className="close-btn" onClick={closeModalWindow}>Close</button>
                <h5><span>Welcome! </span>Please sign in / sign up to continue or</h5>
                {/*Временные кнопки*/}
                <button className="btn active" onClick={(event) => changeFormHandler(event)}>Sign in</button>
                <button className="btn" onClick={(event) => changeFormHandler(event)}>Sign up</button>
                {/*=================*/}
                {currentForm ? <SignIn/> : <SignUp/>}

            </div>
        </div>
    )
}

export default ModalWindow