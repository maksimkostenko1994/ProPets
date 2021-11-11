import React from "react";
import WalkingCard from "./WalkingCard";

const WalkingList = ({rows}) => {

    return rows !== undefined && (
        <ul className="service-list">
            <p className="service-title">Walking. No have time tonight? We have a solution!</p>
            {rows.map(service => <WalkingCard key={service.id} service={service}/>)}
        </ul>
    );
};

export default WalkingList;