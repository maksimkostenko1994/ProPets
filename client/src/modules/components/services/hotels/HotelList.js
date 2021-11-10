import React from 'react';
import HotelCard from "./HotelCard";

const HotelList = ({rows}) => {

    return rows !== undefined && (
        <ul className="service-list">
            <p className="service-title">Walking. No have time tonight? We have a solution!</p>
            <hr/>
            {rows.map(service => <HotelCard key={service.id} service={service}/>)}
        </ul>
    );
};

export default HotelList;