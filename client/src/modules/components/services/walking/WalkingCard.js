import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const WalkingCard = ({service}) => {

    return (
        <li className="service-card">
            <div className="service-card-img">
                <img src={`http://localhost:5000/${service.photo}`} alt="service walking"/>
            </div>
            <div className="service-card-info">
                <Link to={"/profile"} className="service-card-profile">
                    {service.avatar ? (
                        <div className="user-avatar">
                            <img src={`http://localhost:5000/${service.avatar}`} alt="avatar"/>
                        </div>
                    ) : (
                        <div className="user-avatar">
                            <FontAwesomeIcon size="2x" icon={faUser}/>
                        </div>
                    )}
                    <h4>{service.full_name}</h4>
                </Link>
                <div className="service-card-content">
                    <h2>{service.title}</h2>
                    <Link to={`/service/${service.id}`}>...view detail</Link>
                </div>
            </div>
        </li>
    );
};

export default WalkingCard;