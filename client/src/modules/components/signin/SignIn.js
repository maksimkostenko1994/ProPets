import "../../../sass/signup_template/SignUp.scss"
import ModalFooter from "../modal/ModalFooter";
import React, {useState} from "react";

const SignIn = ({currentForm}) => {

    const [login, setLogin] = useState({email: '', password: ''})

    const onChangeHandler = ({target}) => {
        setLogin({...login, [target.name]: target.value})
    }

    return (
        <>
            <div className="signup-box">
                <form className="signup-form" action="#" name="formSignup">
                    <div>
                        <label>Email:</label><input onChange={onChangeHandler} name="email" type="email"/><p/>
                    </div>
                    <div>
                        <label>Password:</label><input onChange={onChangeHandler} name="password" type="password"/><p/>
                    </div>
                </form>
            </div>
            <ModalFooter currentForm={currentForm} user={login}/>
        </>
    )
}

export default SignIn