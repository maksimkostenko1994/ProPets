import React from 'react';
import Field from "../forms/Field";
import Image from "../../../assets/img/Group108.png"
import Button from "../button/Button";
import {faPaw} from "@fortawesome/free-solid-svg-icons";

const AddFoundPet = () => {
    return (
        <div className="found-box">
            <h2>Found a pet? Please complete the form to help.</h2>
            <hr/>
            <form>
                <div className="found-container">
                    <div className="found-add-left">
                        <div>
                            <label htmlFor="type">Type:</label>
                            <select name="type">
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
                            <select name="sex">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Neutral">Neutral</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="breed">Breed:</label>
                            <Field type="text" name="breed" placeholder="Type breed"/>
                        </div>
                        <div>
                            <label htmlFor="color">Color:</label>
                            <Field type="text" name="color" placeholder="Type color"/>
                        </div>
                        <div>
                            <label htmlFor="height">Height:</label>
                            <select name="height">
                                <option value="20cm-35cm">20cm - 35cm</option>
                                <option value="35cm-75cm">35cm - 75cm</option>
                                <option value="75cm-115cm">75cm - 115cm</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="features">Distinctive <br/> features:<br/><span>up to 60 char</span></label>
                            <textarea name="features" placeholder="Type features"/>
                        </div>
                        <div>
                            <label htmlFor="description">Description:<br/><span>up to 150 char</span></label>
                            <textarea name="description" placeholder="Type description"/>
                        </div>
                        <div>
                            <label htmlFor="location">Location: </label>
                            <textarea name="location" placeholder="Type location"/>
                        </div>
                    </div>
                    <div className="found-add-right">
                        <div className="found-add-image"><img src={Image} alt="pet"/></div>
                        <div className="found-add-btn">
                            <Field type="text" placeholder="load image" disabled/>
                            <div className="found-load-btn">
                                <Field className="btn-1" type="file"/>
                                <Field className="btn-2" type="text" value="Load image" name="photo"/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="found-contacts">
                    <label htmlFor="contacts">Contacts: </label>
                    <Field type="text" name="phone" placeholder="Phone"/>
                    <Field type="text" name="email" placeholder="Email"/>
                </div>
                <div className="found-publish">
                    <Button text="Publish" icon={faPaw} color="btn" name="btn-publish"/>
                </div>
            </form>
        </div>
    );
};

export default AddFoundPet;