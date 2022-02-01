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
                        <img src={`https://pro-pets-server.herokuapp.com/${currentService.user.avatar}`} alt="avatar"/>
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
                <img src={`https://pro-pets-server.herokuapp.com/${currentService.photo}`} alt="service"/>
            </div>
            <h2>{currentService.title}</h2>
            <div className="service-full-text">{currentService.text[0] !== "{" ? currentService.text :
                <>
                    <p key={1}>{JSON.parse(currentService.text).street}<br/>{currentService.location}</p>
                    <p key={2}>
                        Telephone: {JSON.parse(currentService.text).phone}<br/>
                        Telefax: {JSON.parse(currentService.text).fax}<br/>
                        {JSON.parse(currentService.text).email}
                    </p>
                    <p key={3}>
                        <span>Working hours:</span><br/>
                        {JSON.parse(currentService.text).workhours.split('\n').map(item =><span style={{display: "block", fontWeight: 200}} key={item}>{item}</span>)}
                    </p>
                </>
            }
            </div>
            <p className="service-full-contacts">
                {(currentService.type === "Hotels" || currentService.type === "VetHelp") ?
                    <span>
                        {
                            currentService.contacts[0] === "{" ?
                                <>
                                    {JSON.parse(currentService.contacts).address}
                                    {JSON.parse(currentService.contacts).email}
                                    {JSON.parse(currentService.contacts).userPhone && JSON.parse(currentService.contacts).userPhone}
                                </> :
                                currentService.contacts
                        }
                    </span> :
                    <>
                        <span>Contacts: </span>
                        {currentService.location && currentService.location}
                        {` | ${JSON.parse(currentService.contacts).address} | 
                        ${JSON.parse(currentService.contacts).email}
                        ${JSON.parse(currentService.contacts).userPhone !== "null" ? ` | ${JSON.parse(currentService.contacts).userPhone}` : ''}`}
                    </>
                }
            </p>
        </div>
    );
};

export default ServiceFullInfo;