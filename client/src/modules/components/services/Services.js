import React, {useEffect} from 'react';
import HotelList from "./hotels/HotelList";
import WalkingList from "./walking/WalkingList";
import FosteringList from "./fostering/FosteringList";
import VetHelpList from "./vet_help/VetHelpList";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getServicesAction, serviceSelector} from "../../../store/service";
import {paginationSelector} from "../../../store/pagination";

const Services = () => {

    const {currentPage, limit} = useSelector(paginationSelector)
    const {services:{rows}} = useSelector(serviceSelector)
    const {type} = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getServicesAction(type, currentPage, limit))
    }, [dispatch, type, currentPage, limit])

    return (
        <div>
            {type === "Hotels" && <HotelList rows={rows}/>}
            {type === "Walking" && <WalkingList rows={rows}/>}
            {type === "Fostering" && <FosteringList rows={rows}/>}
            {type === "VetHelp" && <VetHelpList rows={rows}/>}
        </div>
    );
};

export default Services;