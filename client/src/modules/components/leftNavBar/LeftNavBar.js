import React from 'react';
import {Link, NavLink} from "react-router-dom";
import Button from "../button/Button";
import {faDog, faHome, faHotel, faPaw, faSearch, faStethoscope, faWalking} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";
import {appSelector} from "../../../store/app";

const LeftNavBar = () => {

    const {auth} = useSelector(appSelector)

    const hamburgerArrow = (event) => {
        const {parentNode} = event.currentTarget
        if (parentNode.classList.contains('arrow')) {
            parentNode.parentNode.classList.remove('change-grid')
            parentNode.classList.remove('arrow')
            event.currentTarget.classList.remove('hamburger--arrow')
        } else {
            parentNode.parentNode.classList.add('change-grid')
            parentNode.classList.add('arrow')
            event.currentTarget.classList.add('hamburger--arrow')
        }
    }

    return (
        <div className="left-nav-bar">
            <div className="hamburger" onClick={hamburgerArrow}>
                <div>
                    <span id="hm-1"/>
                    <span id="hm-2"/>
                    <span id="hm-3"/>
                </div>
            </div>
            <div className="left-menu">
                {auth ? <NavLink to={'/posts'}><Button text={'Home'} icon={faHome} color={"btn"}/></NavLink> :
                    <Link to=""/>}
                <NavLink to={'/lost'}><Button text={'Lost'} icon={faSearch} color={"btn"}/></NavLink>
                <NavLink to={'/found'}><Button text={'Found'} icon={faPaw} color={"btn"}/></NavLink>
            </div>
            {auth &&
            <div className="left-menu-services">
                <h3>Services</h3>
                <div>
                    <NavLink to={`/services/Hotels`}><Button text={'Hotels'} icon={faHotel} color={"btn"}/></NavLink>
                    <NavLink to={'/services/Walking'}><Button text={'Walking'} icon={faWalking}
                                                              color={"btn"}/></NavLink>
                    <NavLink to={'/services/Fostering'}><Button text={'Fostering'} icon={faDog}
                                                                color={"btn"}/></NavLink>
                    <NavLink to={'/services/VetHelp'}><Button text={'VetHelp'} icon={faStethoscope}
                                                              color={"btn"}/></NavLink>
                </div>
            </div>}
        </div>
    );
};

export default LeftNavBar;