import "../../../sass/lost_template/Add-lost-post.scss";
import Photo from "../../../assets/img/Group 108@2x.png";
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
            height: `45-70cm`,
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
        console.log(target.value);
        loadFile(target.value);
    };

    return (
        <div className="add-lost-post-container">
            <h2>Lost your buddy? Keep calm and complete the form</h2>
            <hr />
            <form className="add-post-form" ref={form} noValidate>
                <div className="lost-form-body">
                    <div className="left">
                        <div className="left-box">
                            <div className="left-label">
                                <label>Nickname:</label>
                            </div>
                            <div className="left-field">
                                <Field
                                    placeholder="Uncle Sam"
                                    name="nick"
                                    error={errors.nick}
                                />
                            </div>
                        </div>
                        <div className="left-box">
                            <div className="left-label">
                                <label>Type:</label>
                            </div>
                            <div className="left-field">
                                <select name="type" error={errors.type}>
                                    <option>Dog</option>
                                    <option>Cat</option>
                                    <option>Bird</option>
                                    <option>Reptile</option>
                                    <option>Mammal</option>
                                </select>
                            </div>
                        </div>
                        <div className="left-box">
                            <div className="left-label">
                                <label>Sex:</label>
                            </div>
                            <div className="left-field">
                                <select name="sex" error={errors.sex}>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Neutral</option>
                                </select>
                            </div>
                        </div>
                        <div className="left-box">
                            <div className="left-label">
                                <label>Breed:</label>
                            </div>
                            <div className="left-field">
                                <Field
                                    placeholder="Golden Retriever"
                                    name="breed"
                                    error={errors.breed}
                                />
                            </div>
                        </div>
                        <div className="left-box">
                            <div className="left-label">
                                <label>Color:</label>
                            </div>
                            <div className="left-field">
                                <Field
                                    placeholder="Beige"
                                    name="color"
                                    error={errors.color}
                                />
                            </div>
                        </div>
                        <div className="left-box">
                            <div className="left-label">
                                <label>Height:</label>
                            </div>
                            <div className="left-field">
                                <select name="height" error={errors.height}>
                                    <option>45-70cm</option>
                                    <option>30-45cm</option>
                                    <option>10-30cm</option>
                                </select>
                            </div>
                        </div>

                        <div className="left-box">
                            <div className="left-label">
                                <label>
                                    Distinctive features:
                                    <br />
                                    <span>up to 60 char</span>
                                </label>
                            </div>
                            <div className="left-field">
                                <textarea
                                    name="features"
                                    error={errors.features}
                                    cols="30"
                                    rows="3"
                                    placeholder="blue collar with stars, no left ear, damaged tail."
                                    maxLength="60"
                                />
                            </div>
                        </div>
                        <div className="left-box">
                            <div className="left-label">
                                <label>
                                    Description:
                                    <br />
                                    <span>up to 150 char</span>
                                </label>
                            </div>
                            <div className="left-field">
                                <textarea
                                    name="description"
                                    error={errors.description}
                                    cols="30"
                                    rows="6"
                                    maxLength="150"
                                    placeholder="brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. Junk MTV quiz graced by fox"
                                />
                            </div>
                        </div>
                        <div className="left-box">
                            <div className="left-label">
                                <label>Location:</label>
                            </div>
                            <div className="left-field">
                                <textarea
                                    name="location"
                                    error={errors.location}
                                    cols="30"
                                    rows="4"
                                    placeholder="Oliver Platz, Berlin"
                                    maxLength="60"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right-up">
                            <div>
                                <img src={Photo} alt="man-pictures" />
                            </div>
                        </div>
                        <div className="right-down">
                            <div className="img-section">
                                <Field
                                    placeholder="load image "
                                    defaultValue={file}
                                    error={errors.image}
                                    disabled
                                    type="text"
                                    name="loadImg"
                                />
                            </div>
                            <div className="right-down-btn">
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
                                    name="loadImg2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="form-contacts">
                    <div className="contacts-label">
                        <label>Contacts:</label>
                    </div>
                    <div className="contacts-field">
                        <Field
                            type="text"
                            placeholder="Phone*"
                            name="phone"
                            error={errors.phone}
                        />
                    </div>
                    <div className="contacts-field-right">
                        <Field
                            type="text"
                            name="email"
                            placeholder="Email"
                            error={errors.email}
                        />
                    </div>
                </div>
                <div className="publishBtnSection" align="right">
                    <Button text={"Publish"} icon={faPaw} color={"btn"} />
                </div>
            </form>
        </div>
    );
};
export default AddLostPost;
