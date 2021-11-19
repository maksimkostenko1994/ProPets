import "../../../sass/lost_template/Add-lost-post.scss";
import Photo from "../../../assets/img/Group108.png";
import Button from "../button/Button";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import { useForm, set } from "react-cool-form";
import Field from "../forms/Field";
import { useDispatch, useSelector } from "react-redux";
import {  } from "../../../store/pet";
import { userSelector } from "../../../store/app";

const AddLostPost = () => {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();
    const yupSchema = yup.object().shape({
        nick: yup.string().min(2),
        type: yup.string().min(1),
        sex: yup.string().min(1),
        breed: yup.string().min(2),
        color: yup.string().min(2),
        height: yup.string().min(1),
        distinctive: yup.string().min(1),
        description: yup.string().min(1),
        location: yup.string().min(1),
        phone: yup.string().min(2),
        email: yup.string().min(2),
        image: yup.string(),
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
            userId: `${user.id}`,
            status: `lost`,
            nick: ``,
            type: ``,
            sex: ``,
            breed: ``,
            color: ``,
            height: ``,
            distinctive: ``,
            description: ``,
            location: ``,
            phone: ``,
            email: ``,
            image: ``,
        },
        validate: validateWithYup(yupSchema),
        onSubmit: (values, { reset }) => {
            console.log("post value from form", values);
            //dispatch(addLostPetPost({ ...values }));
            reset();
        },
    });
    const errors = use("errors", { errorWithTouched: true });

    return (
        <div className="add-lost-post-container">
            <h3>Lost your buddy? Keep calm and complete the form</h3>
            <hr />
            <form className="add-post-form" ref={form}>
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
                                    name="distinctive"
                                    error={errors.distinctive}
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
                                <Field type="file" name="image" />
                                <Button text={"Load img"} color={"btn"} />
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
