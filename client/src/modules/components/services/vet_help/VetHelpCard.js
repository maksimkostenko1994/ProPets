import React from "react";
import { Link } from "react-router-dom";

const VetHelpCard = ({ service }) => {
    return (
        <li className="service-card">
            <div className="service-card-img">
                <img
                    src={`http://localhost:5000/${service.photo}`}
                    alt="service fostering"
                />
            </div>
            <div className="service-card-info">
                <div className="service-card-content">
                    <h2>{service.title}</h2>
                    {/*<p><span>Address:</span><br/>{JSON.parse(service.text).street} {service.location}</p>*/}
                    {/*<p><span>Address:</span><br/>{JSON.parse(service.text).street} {service.location}</p>*/}
                    <Link to={`/service/${service.id}`}>...view detail</Link>
                </div>
            </div>
        </li>
    );
};

export default VetHelpCard;
