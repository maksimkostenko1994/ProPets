import React, {useEffect} from "react";
import HotelList from "./hotels/HotelList";
import WalkingList from "./walking/WalkingList";
import FosteringList from "./fostering/FosteringList";
import VetHelpList from "./vet_help/VetHelpList";
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getServicesAction, serviceSelector} from "../../../store/service";
import {
    paginationSelector,
    setCurrentPageAction,
} from "../../../store/pagination";

const Services = () => {
    const {currentPage, limit, pages} = useSelector(paginationSelector);
    const {
        services: {rows},
    } = useSelector(serviceSelector);
    const {type} = useParams();

    const pagesArr = (number) => {
        const res = [];
        for (let i = 1; i <= number; i++) res.push(i);
        return res;
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getServicesAction(type, currentPage, limit));
    }, [dispatch, type, currentPage, limit]);

    return (
        <div>
            <div className="service-pagination">
                {pagesArr(pages).map((item) => (
                    <a
                        id={item}
                        onClick={(event) => {
                            dispatch(setCurrentPageAction(item));
                            event.target.classList.add("service-active-link");
                            Array.from(event.target.parentNode.children).map(
                                (link) =>
                                    event.target.id !== link.id
                                        ? link.classList.remove(
                                            "service-active-link"
                                        )
                                        : ""
                            );
                        }}
                        key={item}
                    >
                        {item}
                    </a>
                ))}
            </div>
            {type === "Hotels" && <HotelList rows={rows}/>}
            {type === "Walking" && <WalkingList rows={rows}/>}
            {type === "Fostering" && <FosteringList rows={rows}/>}
            {type === "VetHelp" && <VetHelpList rows={rows}/>}
        </div>
    );
};

export default Services;
