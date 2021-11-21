import "../../../sass/signup_template/SignUp.scss";
import ModalFooter from "../modal/ModalFooter";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorSelector, loginAction } from "../../../store/auth";
import * as yup from "yup";
import { useForm, set } from "react-cool-form";
import Field from "../forms/Field";
import Error from "../error/Error";
import { useHistory } from "react-router-dom";

const SignIn = ({ currentForm }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const error = useSelector(errorSelector);

    const yupSchema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
    });

    const validateWithYup = (schema) => async (values) => {
        let errors = {};
        try {
            await schema.validate(values, { abortEarly: false });
        } catch (yupError) {
            yupError.inner.forEach(({ path, message }) =>
                set(errors, path, message)
            );
        }
        return errors;
    };

    const { form, use } = useForm({
        defaultValues: { email: "", password: "" },
        validate: validateWithYup(yupSchema),
        onSubmit: (values, e, { submitter }) => {
            if (submitter.name === "login") {
                dispatch(loginAction(values));
                history.push("/posts");
            }
        },
    });

    const errors = use("errors", { errorWithTouched: true });

    return (
        <div className="signup-box">
            <form ref={form} className="signup-form" noValidate>
                <div className="signup-div">
                    <div className="signup-form-field">
                        <label>Email:</label>
                        <Field name="email" type="email" error={errors.email} />
                    </div>
                    <div className="signup-form-field">
                        <label>Password:</label>
                        <Field
                            name="password"
                            type="password"
                            error={errors.password}
                        />
                    </div>
                    {error && (
                        <Error text={error} errorClass="not-auth-error" />
                    )}
                </div>
                <ModalFooter currentForm={currentForm} user={"login"} />
            </form>
        </div>
    );
};

export default SignIn;
