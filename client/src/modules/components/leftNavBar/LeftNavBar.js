import React from 'react';
import {NavLink} from "react-router-dom";
import Button from "../button/Button";
import {faDog, faHome, faHotel, faPaw, faSearch, faStethoscope, faWalking} from "@fortawesome/free-solid-svg-icons";

const LeftNavBar = () => {

    return (
        <div className="left-nav-bar">
            <div className="left-menu">
                <NavLink to={'/posts'}><Button text={'Home'} icon={faHome} color={"btn"}/></NavLink>
                <NavLink to={'/lost'}><Button text={'Lost'} icon={faSearch} color={"btn"}/></NavLink>
                <NavLink to={'/found'}><Button text={'Found'} icon={faPaw} color={"btn"}/></NavLink>
            </div>
            <div className="left-menu-services">
                <h3>Services</h3>
                <div>
                    <NavLink to={`/services/Hotels`}><Button text={'Hotels'} icon={faHotel} color={"btn"}/></NavLink>
                    <NavLink to={'/services/Walking'}><Button text={'Walking'} icon={faWalking} color={"btn"}/></NavLink>
                    <NavLink to={'/services/Fostering'}><Button text={'Fostering'} icon={faDog} color={"btn"}/></NavLink>
                    <NavLink to={'/services/VetHelp'}><Button text={'VetHelp'} icon={faStethoscope} color={"btn"}/></NavLink>
                </div>
            </div>
        </div>
    );
};

export default LeftNavBar;