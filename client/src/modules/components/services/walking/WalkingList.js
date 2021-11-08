import {useDispatch, useSelector} from "react-redux";
import {getServicesAction, serviceSelector} from "../../../../store/service";
import {Link, useParams} from "react-router-dom";
import React, {useEffect} from "react";

const WalkingList = () => {

    const {services: {rows}} = useSelector(serviceSelector)
    const {type} = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getServicesAction(type))
    }, [dispatch, type])

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

export default WalkingList;