import React, {useState} from "react";
import Button from "../button/Button";
import {faPaw, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../../../store/app";
import {useForm, set} from "react-cool-form";
import * as yup from "yup"
import Field from "../forms/Field";
import VetHelpForm from "./add_service/VetHelpForm";
import {addServiceAction} from "../../../store/service";

const AddService = () => {
        const user = useSelector(userSelector);

        const dispatch = useDispatch()

        const [serviceType, setType] = useState("Hotels")

        const onTypeHandler = ({target}) => {
            setType(target.value)
        }

        const yupSchema = yup.object().shape({
            title: yup.string().required(),
            type: yup.string(),
            text: yup.string().required(),
            photo: yup.string().required(),
            contacts: yup.string().required(),
            location: yup.string()
        })

        const walkingSchema = yup.object().shape({
            title: yup.string().required(),
            type: yup.string(),
            text: yup.string().required(),
            photo: yup.string().required(),
            contacts: yup.string().required(),
            date: yup.string().required(),
            dateTime: yup.string().required(),
            location: yup.string()
        })

        const specialSchema = yup.object().shape({
            title: yup.string().required(),
            type: yup.string(),
            phone: yup.string().required(),
            street: yup.string().required(),
            indexAndCity: yup.string().required(),
            fax: yup.string(),
            email: yup.string().email().required(),
            workhours: yup.string().required(),
            photo: yup.string().required(),
            contacts: yup.string().required(),
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
            defaultValues:
                serviceType === "Hotels" || serviceType === "VetHelp" ? {
                        title: ``,
                        type: `Hotels`,
                        photo: ``,
                        contacts: ``,
                        location: ``,
                        phone: ``,
                        street: ``,
                        indexAndCity: ``,
                        fax: ``,
                        email: ``,
                        workhours: ``
                    } :
                    serviceType === "Walking" ?
                        {
                            title: ``,
                            type: ``,
                            text: ``,
                            photo: ``,
                            contacts: ``,
                            date: ``,
                            location: ``
                        }
                        :
                        {
                            title: ``,
                            type: ``,
                            text: ``,
                            photo: ``,
                            contacts: ``,
                            location: ``
                        },
            validate: serviceType === "Hotels" || serviceType === "VetHelp" ?
                validateServiceForm(specialSchema) : serviceType === "Walking" ?
                    validateServiceForm(walkingSchema) : validateServiceForm(yupSchema),
            onSubmit: (values, {reset}, e) => {
                if (values.type === "Hotels" || values.type === "VetHelp")
                    dispatch(addServiceAction({
                        title: values.title,
                        type: values.type,
                        text: {
                            phone: `${values.phone}`,
                            street: `${values.street}`,
                            indexAndCity: `${values.indexAndCity}`,
                            fax: `${values.fax}`,
                            email: `${values.email}`,
                            workhours: `${values.workhours}`
                        },
                        photo: values.photo,
                        contacts: values.contacts,
                        location: values.location,
                        userId: user.id
                    }))
                else
                    dispatch(addServiceAction({...values, userId: user.id}))
                reset()
                setType("Hotels")
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
                    <label htmlFor="photo">Photo</label>
                    <Field type="file" name="photo" error={errors.photo}/>
                    <label htmlFor="contacts">Contacts</label>
                    <Field type="text" name="contacts" error={errors.contacts}/>
                    {serviceType === "Walking" &&
                    <>
                        <label htmlFor="date">Date</label>
                        <Field type="date" name="date" error={errors.date}/>
                        <label htmlFor="dateTime">Date</label>
                        <Field type="time" name="dateTime" error={errors.dateTime}/>
                    </>
                    }
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
    }
;

export default AddService;
