import React from "react";
import PetItem from "./PetItem";
import "./../../../sass/lost_template/Lost-list.scss";
import { useLocation } from "react-router-dom";

const PetsList = () => {
    const { pathname } = useLocation();
    return (
        <div className="lost-container">
            <p className="lost-title">{pathname.slice(1)} pets</p>
            <hr />
            <div className="lost-list">
                <PetItem />
            </div>
        </div>
    );
};

export default PetsList;
