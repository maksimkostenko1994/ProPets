import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getServiceAction, serviceSelector} from "../../../store/service";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const ServiceFullInfo = () => {

    const {currentService} = useSelector(serviceSelector)

    const {id} = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getServiceAction(parseInt(id)))
    }, [dispatch, id])

    const date = currentService && moment(currentService.date).format("D MMMM, HH:mm")

    return currentService && (
        <div className="service-full-info">
            {currentService.type === "Walking" &&
            <p className="service-title">Walking. No have time tonight? We have a solution!</p>}
            {currentService.type === "Hotels" && <p className="service-title">Hotels. The best hotels in the world!</p>}
            {currentService.type === "Fostering" && <p className="service-title">Fostering. In adoption we trust.</p>}
            {currentService.type === "VetHelp" && <p className="service-title">VetHelp. They deserve it.</p>}
            <hr/>
            {currentService.type !== "VetHelp" && currentService.type !== "Hotels" &&
            <div className="service-user-info">
                {currentService.user.avatar ? (
                    <div className="user-avatar">
                        <img src={`http://localhost:5000/${currentService.user.avatar}`} alt="avatar"/>
                    </div>
                ) : (
                    <div className="user-avatar">
                        <FontAwesomeIcon size="2x" icon={faUser}/>
                    </div>
                )}
                <div className="service-user-text">
                    {currentService.user.full_name}
                    <span>{date}</span>
                </div>
            </div>}
            <div className="service-full-img">
                <img src={`http://localhost:5000/${currentService.photo}`} alt="service"/>
            </div>
            <h2>{currentService.title}</h2>
            <p className="service-full-text">{currentService.text}</p>
            <p className="service-full-contacts"><span>Contacts:</span> {currentService.location && currentService.location} {currentService.contacts}</p>
        </div>
    );
};

export default ServiceFullInfo;