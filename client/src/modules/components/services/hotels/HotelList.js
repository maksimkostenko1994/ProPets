import React from 'react';
import HotelCard from "./HotelCard";

const HotelList = ({rows}) => {

    return rows !== undefined && (
        <ul className="service-list">
            <p className="service-title">Hotels. The best hotels in the world!</p>
            {rows.map(service => <HotelCard key={service.id} service={service}/>)}
        </ul>
    );
};

export default HotelList;