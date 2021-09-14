import "../../../sass/signup_template/SignUp.scss"

const SignUp = () => {


    return (
        <div className="signup-box">
            <form className="signup-form" action="#" name="formSignup">
                <div>
                    <label>Name:</label><input name="name" type="text"/><p/>
                </div>
                <div>
                    <label>Email:</label><input name="email" type="email"/><p/>
                </div>
                <div>
                    <label>Password:</label><input name="password" type="password"/><p>Password must have at least 8
                    characters with at least one Capital letter, at least one lower
                    case and at least one number or special character.</p>
                </div>
                <div>
                    <label>Password:</label><input name="repeatPassword" type="password"/><p style={{paddingBottom: "7px"}}>Please re-enter your
                    password</p>
                </div>
            </form>
        </div>
    )
}

export default SignUp