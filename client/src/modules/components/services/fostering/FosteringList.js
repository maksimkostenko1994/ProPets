import React from 'react';
import {Link} from "react-router-dom";

const FosteringList = ({rows}) => {

    return rows !== undefined && (
        <div>
            {rows.map(service => <li key={service.id}>
                <div>
                    <img src={`http://localhost:5000/${service.photo}`} alt="service fostering"/>
                </div>
                <div>
                    <h2>{service.title}</h2>
                    <Link to={`/services/${service.id}`}>...view details</Link>
                </div>
            </li>)}
        </div>
    );
};

export default FosteringList;