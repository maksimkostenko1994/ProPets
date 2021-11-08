import React from 'react';
import HotelList from "./hotels/HotelList";
import WalkingList from "./walking/WalkingList";
import FosteringList from "./fostering/FosteringList";
import VetHelpList from "./vet_help/VetHelpList";
import {useParams} from "react-router-dom";

const Services = () => {

    const {type} = useParams()

    return (
        <div>
            {type === "Hotels" && <HotelList/>}
            {type === "Walking" && <WalkingList/>}
            {type === "Fostering" && <FosteringList/>}
            {type === "VetHelp" && <VetHelpList/>}
        </div>
    );
};

export default Services;