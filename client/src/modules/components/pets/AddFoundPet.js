import React, { useState } from "react";
import Field from "../forms/Field";
import Image from "../../../assets/img/Group108.png";
import Button from "../button/Button";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../store/app";
import { set, useForm } from "react-cool-form";
import { addFoundPetAction } from "../../../store/pet";

const AddFoundPet = () => {
    const [file, loadFile] = useState(null);

    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    const foundSchema = yup.object().shape({
        type: yup.string().required(),
        sex: yup.string().required(),
        breed: yup.string().min(3).required(),
        color: yup.string().min(3).required(),
        height: yup.string().required(),
        features: yup.string().required(),
        description: yup.string().min(3).required(),
        location: yup.string().min(3).required(),
        image: yup.string().required(),
        email: yup.string().email().required(),
        phone: yup.string().required(),
    });

    const validateFoundForm = (schema) => async (values) => {
        let errors = {};
        try {
            await schema.validate(values, { abortEarly: false });
        } catch (yupError) {
            console.log(yupError);
            yupError.inner.forEach(({ path, message }) =>
                set(errors, path, message)
            );
        }
        return errors;
    };

    const { form, use } = useForm({
        defaultValues: {
            type: `Dog`,
            sex: "Male",
            breed: ``,
            color: ``,
            height: `20cm - 35cm`,
            features: ``,
            description: ``,
            location: ``,
            image: ``,
            email: user.email,
            phone: user.phone,
        },
        validate: validateFoundForm(foundSchema),
        onSubmit: (values, { reset }) => {
            dispatch(
                addFoundPetAction({
                    ...values,
                    contacts: `${values.phone} ${values.email} ${user.full_name}`,
                    userId: user.id,
                    status: "found",
                })
            );
            reset();
        },
    });

    const errors = use("errors", { errorWithTouched: true });

    const onChangeHandler = ({ target }) => {
        console.log(target.value);
        loadFile(target.value);
    };

    return (
        <div className="found-box">
            <h2>Found a pet? Please complete the form to help.</h2>
            <hr />
            <form ref={form} noValidate>
                <div className="found-container">
                    <div className="found-add-left">
                        <div>
                            <label htmlFor="type">Type:</label>
                            <select name="type" error={errors.type}>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                                <option value="Bird">Bird</option>
                                <option value="Reptile">Reptile</option>
                                <option value="Fish">Fish</option>
                                <option value="Mammal">Mammal</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="sex">Sex:</label>
                            <select name="sex" error={errors.sex}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Neutral">Neutral</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="breed">Breed:</label>
                            <Field
                                type="text"
                                name="breed"
                                placeholder="Type breed"
                                error={errors.breed}
                            />
                        </div>
                        <div>
                            <label htmlFor="color">Color:</label>
                            <Field
                                type="text"
                                name="color"
                                placeholder="Type color"
                                error={errors.color}
                            />
                        </div>
                        <div>
                            <label htmlFor="height">Height:</label>
                            <select name="height" error={errors.height}>
                                <option value="20cm-35cm">20cm - 35cm</option>
                                <option value="35cm-75cm">35cm - 75cm</option>
                                <option value="75cm-115cm">75cm - 115cm</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="features">
                                Distinctive <br /> features:
                                <br />
                                <span>up to 60 char</span>
                            </label>
                            <textarea
                                name="features"
                                placeholder="Type features"
                                error={errors.features}
                            />
                        </div>
                        <div>
                            <label htmlFor="description">
                                Description:
                                <br />
                                <span>up to 150 char</span>
                            </label>
                            <textarea
                                name="description"
                                placeholder="Type description"
                                error={errors.description}
                            />
                        </div>
                        <div>
                            <label htmlFor="location">Location: </label>
                            <textarea
                                name="location"
                                placeholder="Type location"
                                error={errors.location}
                            />
                        </div>
                    </div>
                    <div className="found-add-right">
                        <div className="found-add-image">
                            <img src={Image} alt="pet" />
                        </div>
                        <div className="found-add-btn">
                            <Field
                                type="text"
                                placeholder="load image"
                                defaultValue={file}
                                error={errors.image}
                                name="fake"
                                disabled
                            />
                            <div className="found-load-btn">
                                <Field
                                    className="btn-1"
                                    type="file"
                                    name="image"
                                    onChange={onChangeHandler}
                                />
                                <Field
                                    className="btn-2"
                                    value="Load image"
                                    type="text"
                                    name="fake"
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="found-contacts">
                    <label htmlFor="contacts">Contacts: </label>
                    <Field
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        error={errors.phone}
                    />
                    <Field
                        type="text"
                        name="email"
                        placeholder="Email"
                        error={errors.email}
                    />
                </div>
                <div className="found-publish">
                    <Button
                        text="Publish"
                        icon={faPaw}
                        color="btn"
                        name="publish"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddFoundPet;
