import React, {useEffect} from "react";
import PetItem from "./PetItem";
import "./../../../sass/lost_template/Lost-list.scss";
import {NavLink, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPetsAction, petsSelector} from "../../../store/pet";
import {authSelector} from "../../../store/app";

const PetsList = () => {
    const {pathname} = useLocation();
    const auth = useSelector(authSelector)

    const path = pathname.slice(1)
    const {pets} = useSelector(petsSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPetsAction(path))
    }, [dispatch, path])

    return (
        <div className="lost-container">
            <p className="lost-title">{pathname.slice(1)} pets</p>
            <hr/>
            {!auth && <p style={{
                fontSize: "0.9rem",
                marginTop: "10px"
            }}>Would you like to publish a post? <NavLink style={{color: "rgb(6, 178, 187)", textDecoration: "underline"}} to="/signin">JOIN</NavLink> to our community</p>}
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
