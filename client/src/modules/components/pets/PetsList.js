import React from "react";
import PetItem from "./PetItem";
import "./../../../sass/lost_template/Lost-list.scss";
import { useLocation } from "react-router-dom";
import { petsSelector } from "../../../store/pets";
import { useSelector } from "react-redux";

const PetsList = () => {
    const { pathname } = useLocation();
    const pets = useSelector(petsSelector);
    const lostPets = pets.filter((pet) => pet.status === "lost");
    const foundPets = pets.filter((pet) => pet.status === "found");
    return (
        <div className="lost-container">
            <p className="lost-title">{pathname.slice(1)} pets</p>
            <hr />
            <div className="lost-list">
                {pathname.slice(1) === "lost"
                    ? lostPets.map((pet, index) => (
                          <PetItem key={index} pet={pet} index={pet.id} />
                      ))
                    : foundPets.map((pet, index) => (
                          <PetItem key={index} pet={pet} index={pet.id} />
                      ))}
            </div>
        </div>
    );
};

export default PetsList;
