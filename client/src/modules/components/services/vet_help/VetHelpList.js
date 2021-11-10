import React from "react";
import VetHelpCard from "./VetHelpCard";

const VetHelpList = ({rows}) => {

    return rows !== undefined && (
        <ul className="service-list">
            <p className="service-title">VetHelp. They deserve it.</p>
            {rows.map(service => <VetHelpCard key={service.id} service={service}/>)}
        </ul>
    );
};

export default VetHelpList;