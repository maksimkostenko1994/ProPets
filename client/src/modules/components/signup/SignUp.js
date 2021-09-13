import "../../../sass/signup_template/SignUp.scss"

const SignUp = () => {
    return (
        <div className="signup-box">
            <form className="signup-form" action="#" name="formSignup">
                <label>Name:</label><input name="name" type="text"/>
                <label>Email:</label><input name="email" type="email"/>
                <label>Password:</label><input name="password" type="password"/>
                <label>Password:</label><input name="repeatPassword" type="password"/>
            </form>
            <div className="form-validation"/>
        </div>
    )
}

export default SignUp