import React, {useEffect} from 'react';
import * as yup from "yup"
import Button from "../button/Button";
import {faPaw, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../../../store/app";
import {getUser} from "../../../store/auth";

const AddService = () => {

    const user = useSelector(userSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    console.log(user)

    return (
        <div className="add-service">
            <h3>Your new service! Simplify text, add photo and publish.</h3>
            <hr/>
            <form>
                <label htmlFor="">Title</label>
                <input type="text"/>
                <label htmlFor="">Text</label>
                <span>up to 1500 char</span>
                <textarea/>
                <label htmlFor="">Photo</label>
                <input type="file"/>
                <label htmlFor="">Contacts</label>
                <input type="text"/>
                <label htmlFor="">Location</label>
                <input type="text"/>
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
                    <Button text={'Publish'} color={'btn'} icon={faPaw}/>
                </div>
            </form>
        </div>
    );
};

export default AddService;