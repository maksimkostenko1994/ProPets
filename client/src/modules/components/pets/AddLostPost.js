import "../../../sass/lost_template/Add-lost-post.scss";
import Photo from "../../../assets/img/Group108.png";
import Button from "../button/Button";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import { useForm, set } from "react-cool-form";
import Field from "../forms/Field";
import { useDispatch, useSelector } from "react-redux";
import { addLostPetPost } from "../../../store/pet";
import { userSelector } from "../../../store/app";
import { useState } from "react";

const AddLostPost = () => {
    const [file, loadFile] = useState(null);

    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    const yupSchema = yup.object().shape({
        nick: yup.string().min(2).required(),
        type: yup.string().min(1).required(),
        sex: yup.string().min(1).required(),
        breed: yup.string().min(2).required(),
        color: yup.string().min(2).required(),
        height: yup.string().min(1).required(),
        features: yup.string().min(1).required(),
        description: yup.string().min(1).required(),
        location: yup.string().min(1).required(),
        phone: yup.string().min(2).required(),
        email: yup.string().min(2).required(),
        image: yup.string().required(),
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
        defaultValues: {
            status: `lost`,
            nick: ``,
            type: `Dog`,
            sex: `Male`,
            breed: ``,
            color: ``,
            height: `45-70`,
            features: ``,
            description: ``,
            location: ``,
            phone: user.phone,
            email: user.email,
            image: ``,
        },
        validate: validateWithYup(yupSchema),
        onSubmit: (values, { reset }) => {
            dispatch(
                addLostPetPost({
                    ...values,
                    contacts: `${values.phone} ${values.email} ${user.full_name}`,
                    userId: user.id,
                    status: "lost",
                })
            );
            reset();
        },
    });
    const errors = use("errors", { errorWithTouched: true });

    const onChangeHandler = ({ target }) => {
        loadFile(target.value);
    };

    return (
        <div className="add-lost-post-container">
            <h3>Lost your buddy? Keep calm and complete the form</h3>
            <hr />
            <form className="add-post-form" ref={form} noValidate>
                <table id="table">
                    <tbody>
                        <tr>
                            <td className="table-td">Nickname:</td>
                            <td>
                                <Field
                                    placeholder="Benladen"
                                    name="nick"
                                    error={errors.nick}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-td">Type:</td>
                            <td>
                                <select name="type" error={errors.type}>
                                    <option value="Dog">Dog</option>
                                    <option value="Cat">Cat</option>
                                    <option value="Other">Other</option>
                                </select>
                            </td>
                            <td rowSpan="4" className="table-photo">
                                <img src={Photo} alt="man-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-td">Sex:</td>
                            <td>
                                <select name="sex" error={errors.sex}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-td">Breed:</td>
                            <td>
                                <Field
                                    name="breed"
                                    error={errors.breed}
                                    placeholder="Golden Retriever"
                                />
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="table-td">Color:</td>
                            <td>
                                <Field
                                    name="color"
                                    error={errors.color}
                                    placeholder="Beige"
                                />
                            </td>
                            <td></td>
                        </tr>
                        <tr className="tr-height">
                            <td className="table-td">Height:</td>
                            <td className="table-td-height">
                                <select name="height" error={errors.height}>
                                    <option value="45-70">45-70 cm</option>
                                    <option value="30-45 ">30-45 cm</option>
                                    <option value="10-30">10-30 cm</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-td">
                                Distinctive
                                <br /> features:
                                <br />
                                <span>up to 60 char</span>
                            </td>
                            <td>
                                <textarea
                                    name="features"
                                    error={errors.features}
                                    cols="30"
                                    rows="3"
                                    placeholder="blue collar with stars, no left ear, damaged tail."
                                    maxLength="60"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-td">
                                Description:
                                <br />
                                <span>up to 150 char</span>
                            </td>
                            <td>
                                <textarea
                                    name="description"
                                    error={errors.description}
                                    cols="30"
                                    rows="6"
                                    maxLength="150"
                                    placeholder="blue collar with stars, no left ear, damaged tail."
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-td">Location:</td>
                            <td>
                                <textarea
                                    name="location"
                                    error={errors.location}
                                    cols="30"
                                    rows="4"
                                    placeholder="Oliver Platy, Berlin"
                                    maxLength="60"
                                ></textarea>
                            </td>
                            <td className="loadImageSection" align="right">
                                <Field
                                    type="file"
                                    name="image"
                                    value={file}
                                    error={errors.image}
                                />
                                <Button
                                    text={"Load img"}
                                    color={"btn"}
                                    onclick={onChangeHandler}
                                />
                            </td>
                        </tr>
                        <tr className="contactSection">
                            <td className="table-td">Contacts:</td>
                            <td>
                                <Field
                                    type="text"
                                    placeholder="Phone*"
                                    name="phone"
                                    error={errors.phone}
                                />
                            </td>
                            <td>
                                <Field
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    error={errors.email}
                                />
                            </td>
                        </tr>
                        <tr className="publishBtnSection" align="right">
                            <td colSpan="3" height="20px">
                                <Button
                                    text={"Publish"}
                                    icon={faPaw}
                                    color={"btn"}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};
export default AddLostPost;
