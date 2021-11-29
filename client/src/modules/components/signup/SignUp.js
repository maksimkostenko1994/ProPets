import "../../../sass/signup_template/SignUp.scss";
import React from "react";
import ModalFooter from "../modal/ModalFooter";
import { useDispatch, useSelector } from "react-redux";
import { errorSelector, registrationAction } from "../../../store/auth";
import * as yup from "yup";
import { set, useForm } from "react-cool-form";
import Error from "../error/Error";
import Field from "../forms/Field";
import { useHistory } from "react-router-dom";

const SignUp = ({ currentForm }) => {
    const error = useSelector(errorSelector);

    const dispatch = useDispatch();

    const history = useHistory();

    const yupSchema = yup.object().shape({
        name: yup.string().min(3).required(),
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
        verify: yup
            .string()
            .min(6)
            .test("match", "password do not match", function () {
                return this.parent.password === this.parent.verify;
            })
            .required(),
    });

    const validateSignUpWithYup = (schema) => async (values) => {
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
        defaultValues: { name: "", email: "", password: "", verify: "" },
        validate: validateSignUpWithYup(yupSchema),
        onSubmit: (values, e, { submitter }) => {
            if (submitter.name === "reg") {
                dispatch(registrationAction(values));
                if (!error) history.push("/posts");
            }
        },
    });

    const errors = use("errors", { errorWithTouched: true });

    return (
        <div className="signup-box">
            <form ref={form} className="signup-form" noValidate>
                <div className="signup-div">
                    <div className="signup-form-field">
                        <label>Name:</label>
                        <Field name="name" type="text" error={errors.name} />
                    </div>
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
                    <div className="signup-form-field">
                        <label>Verify:</label>
                        <Field
                            name="verify"
                            type="password"
                            error={errors.verify}
                        />
                    </div>
                    {error && (
                        <Error
                            text={error.data.message}
                            errorClass="not-auth-error"
                        />
                    )}
                </div>
                <ModalFooter currentForm={currentForm} />
            </form>
        </div>
    );
};

export default SignUp;
