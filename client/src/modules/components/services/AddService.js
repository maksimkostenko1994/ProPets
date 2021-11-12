import React, {useState} from "react";
import Button from "../button/Button";
import {faPaw, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";
import {userSelector} from "../../../store/app";
import {useForm, set} from "react-cool-form";
import * as yup from "yup"
import Field from "../forms/Field";
import VetHelpForm from "./add_service/VetHelpForm";

const AddService = () => {
    const user = useSelector(userSelector);

    const [serviceType, setType] = useState("Hotels")

    const onTypeHandler = ({target}) => {
        setType(target.value)
    }

    const yupSchema = yup.object().shape({
        title: yup.string().required(),
        type: yup.string().required(),
        text: yup.string().required(),
        photo: yup.string().required(),
        contacts: yup.string().min(1).required(),
        location: yup.string()
    })

    const specialSchema = yup.object().shape({
        title: yup.string().required(),
        type: yup.string().required(),
        phone: yup.string().required(),
        street: yup.string().required(),
        indexAndCity: yup.string().required(),
        fax: yup.string(),
        email: yup.string().email().required(),
        workhours: yup.string().required(),
        photo: yup.string().required(),
        contacts: yup.string().min(1).required(),
        location: yup.string()
    })

    const validateServiceForm = schema => async values => {
        let errors = {}
        try {
            await schema.validate(values, {abortEarly: false})
        } catch (yupError) {
            yupError.inner.forEach(({path, message}) =>
                set(errors, path, message)
            )
        }
        return errors
    }

    const {form, use} = useForm({
        defaultValues: {
            title: ``,
            type: `Hotels`,
            text: ``,
            photo: ``,
            contacts: ``,
            location: ``,
            phone: ``,
            street: ``,
            indexAndCity: ``,
            fax: ``,
            email: ``,
            workhours: ``
        },
        validate: serviceType === "Hotels" || serviceType === "VetHelp" ? validateServiceForm(specialSchema) : validateServiceForm(yupSchema),
        onSubmit: (values, {reset}, e) => {
            console.log("add service", values)
            reset()
        }
    })

    const errors = use("errors", {errorWithTouched: true})

    return (
        <div className="add-service">
            <h3>Your new service! Simplify text, add photo and publish.</h3>
            <hr/>
            <form ref={form} noValidate>
                <label htmlFor="">Title</label>
                <Field type="text" name="title" error={errors.title}/>
                <label htmlFor="">Type</label>
                <select name="type" onChange={onTypeHandler} error={errors.type}>
                    <option value="Hotels">Hotels</option>
                    <option value="Walking">Walking</option>
                    <option value="Fostering">Fostering</option>
                    <option value="VetHelp">VetHelp</option>
                </select>
                {serviceType === "VetHelp" || serviceType === "Hotels" ?
                    <VetHelpForm errors={errors}/>
                    :
                    <>
                        <label htmlFor="">Text</label>
                        <span>up to 1500 char</span>
                        <textarea name="text" error={errors.text}/>
                    </>
                }
                <label htmlFor="">Photo</label>
                <Field type="file" name="photo" error={errors.photo}/>
                <label htmlFor="">Contacts</label>
                <Field type="text" name="contacts" error={errors.contacts}/>
                <label htmlFor="">Location</label>
                <Field type="text" name="location" error={errors.location}/>
                <div>
                    <div className="user-data-service">
                        {user && user.avatar ? (
                            <img src={user.avatar} alt="avatar"/>
                        ) : (
                            <div className="user-avatar">
                                <FontAwesomeIcon size="2x" icon={faUser}/>
                            </div>
                        )}
                        {user && user.full_name}
                    </div>
                    <Button text={"Publish"} color={"btn"} icon={faPaw}/>
                </div>
            </form>
        </div>
    );
};

export default AddService;
