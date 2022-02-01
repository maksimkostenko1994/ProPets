import React from 'react';
import {Link} from "react-router-dom";

const HotelCard = ({service}) => {

    const [firstDay, secondDay] = service.text[0] === "{" ? JSON.parse(service.text).workhours.split("\n") : service.text

    return (
        <li className="service-card">
            <div className="service-card-img">
                <img src={`https://pro-pets-server.herokuapp.com/${service.photo}`} alt="service fostering"/>
            </div>
            <div className="service-card-info">
                <div className="service-card-content">
                    <h2 style={{color: `#06B2BB`}}>{service.title}</h2>
                    <p style={{marginTop: "20px"}}><span
                        style={{fontWeight: 700}}>Address:</span><br/>{service.text[0] === "{" && JSON.parse(service.text).street} {service.location}
                    </p>
                    <p style={{marginTop: "20px"}}><span
                        style={{fontWeight: 700}}>Working days:</span><br/>{firstDay && firstDay}
                        <br/>{secondDay && secondDay}</p>
                    <Link to={`/service/${service.id}`}>...view detail</Link>
                </div>
            </div>
        </li>
    );
};

export default HotelCard;