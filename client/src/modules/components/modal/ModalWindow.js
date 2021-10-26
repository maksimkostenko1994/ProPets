import "../../../sass/modal_template/ModalWindow.scss"
import Logo from "../logo/Logo";
import SignIn from "../signin/SignIn"
import SignUp from "../signup/SignUp";

import React, {useState} from "react";

const ModalWindow = () => {
    const [currentForm, setCurrentForm] = useState(true)

    const changeFormHandler = (event, isChanged) => {
        event.preventDefault()
        const btns = document.querySelectorAll('.btn')
        btns.forEach(item => item.classList.remove("active"))
        event.target.classList.add("active")
        setCurrentForm(isChanged)
    }

    const signIn = (event) => {
        changeFormHandler(event, true)
    }

    const signUp = (event) => {
        changeFormHandler(event, false)
    }

    return (
        <div className="modal-window">
            <div className="modal-window-body">
                <Logo color={""}/>
                <h5><span>Welcome! </span>Please sign in / sign up to continue or</h5>
                <div className="nav-btns">
                    <button className="btn active" onClick={(event) => signIn(event)}>Sign in</button>
                    <button className="btn" onClick={(event) => signUp(event)}>Sign up</button>
                </div>
                {currentForm ? <SignIn currentForm={currentForm}/> : <SignUp currentForm={currentForm}/>}
            </div>
        </div>
    )
}

export default ModalWindow