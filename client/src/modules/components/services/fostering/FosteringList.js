import React from 'react';
import FosteringCard from "./FosteringCard";

const FosteringList = ({rows}) => {

    return rows !== undefined && (
        <ul className="service-list">
            <p className="service-title">Fostering. In adoption we trust.</p>
            {rows.map(service => <FosteringCard key={service.id} service={service}/>)}
        </ul>
    );
};

export default FosteringList;