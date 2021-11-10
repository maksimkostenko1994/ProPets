import React from 'react';
import {Link} from "react-router-dom";

const HotelCard = ({service}) => {
    return (
        <li className="service-card">
            <div className="service-card-img">
                <img src={`http://localhost:5000/${service.photo}`} alt="service fostering"/>
            </div>
            <div className="service-card-info">
                <div><span/>user name</div>
                <div>
                    <h2>{service.title}</h2>
                    <Link to={`/services/${service.id}`}>...view details</Link>
                </div>
            </div>
        </li>
    );
};

export default HotelCard;