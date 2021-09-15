import "../../../sass/signup_template/SignUp.scss"

const SignIn = () => {
    return (
        <div className="signup-box">
            <form className="signup-form" action="#" name="formSignup">
                <div>
                    <label>Email:</label><input name="email" type="email"/><p/>
                </div>
                <div>
                    <label>Password:</label><input name="password" type="password"/><p/>
                </div>
            </form>
        </div>
    )
}

export default SignIn