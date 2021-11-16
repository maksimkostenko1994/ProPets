import React from "react";
import PetItem from "./PetItem";
import "./../../../sass/lost_template/Lost-list.scss";
import { NavLink, useLocation } from "react-router-dom";

const PetsList = () => {
    const { pathname } = useLocation();
    console.log(pathname.slice(1)); //lost
    return (
        <div className="lost-container">
            <p className="lost-title">{pathname.slice(1)} pets</p>
            <hr />
            <div className="lost-list">
                <PetItem />
            </div>
            <NavLink to={"/lostPost/add"}>Add lost</NavLink>
        </div>
    );
};

export default PetsList;
