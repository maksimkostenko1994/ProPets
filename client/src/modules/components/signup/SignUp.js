import "../../../sass/signup_template/SignUp.scss"
import React, {useState} from "react";
import ModalFooter from "../modal/ModalFooter";

const SignUp = ({currentForm}) => {

    const [registration, setRegistration] = useState({full_name: '', email: '', password: ''})

    const onChangeHandler = ({target}) => {
        setRegistration({...registration, [target.name]: target.value})
    }

    return (
        <>
            <div className="signup-box">
                <form className="signup-form" action="#" name="formSignup">
                    <div>
                        <label>Name:</label><input onChange={onChangeHandler} name="full_name" type="text"/><p/>
                    </div>
                    <div>
                        <label>Email:</label><input onChange={onChangeHandler} name="email" type="email"/><p/>
                    </div>
                    <div>
                        <label>Password:</label><input onChange={onChangeHandler} name="password" type="password"/>
                        <p>Password must have at least 8
                            characters with at least one Capital letter, at least one lower
                            case and at least one number or special character.</p>
                    </div>
                    <div>
                        <label>Password:</label><input name="repeatPassword" type="password"/><p
                        style={{paddingBottom: "7px"}}>Please re-enter your
                        password</p>
                    </div>
                </form>
            </div>
            <ModalFooter currentForm={currentForm} user={registration}/>
        </>
    )
}

export default SignUp