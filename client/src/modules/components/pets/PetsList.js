import React, {useEffect} from "react";
import PetItem from "./PetItem";
import "./../../../sass/lost_template/Lost-list.scss";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPetsAction, petsSelector} from "../../../store/pet";

const PetsList = () => {
    const {pathname} = useLocation();

    const path = pathname.slice(1)
    const {pets} = useSelector(petsSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPetsAction(path))
    }, [dispatch, path])

    console.log(pets)

    return (
        <div className="lost-container">
            <p className="lost-title">{pathname.slice(1)} pets</p>
            <hr/>
            <div className="lost-list">
                {pathname.slice(1) === "lost"
                    ? pets.map((pet, index) => (
                        <PetItem key={index} pet={pet} index={pet.id}/>
                    ))
                    : pets.map((pet, index) => (
                        <PetItem key={index} pet={pet} index={pet.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default PetsList;
