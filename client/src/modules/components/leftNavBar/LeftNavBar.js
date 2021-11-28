import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import Button from "../button/Button";
import {faDog, faHome, faHotel, faPaw, faSearch, faStethoscope, faWalking} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";
import {appSelector} from "../../../store/app";

const LeftNavBar = () => {

    const {auth} = useSelector(appSelector)

    const [isOpen, setOpen] = useState(null)

    const [grid, setGrid] = useState(45)

    const [width, setWidth] = useState(window.innerWidth)

    const hamburgerArrow = () => {
        setOpen(!isOpen)
    }

    const currentTarget = document.querySelector('.hamburger')

    const resizeHandler = ({currentTarget}) => {
        setWidth(currentTarget.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', resizeHandler)
        return function () {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])


    useEffect(() => {
        if (currentTarget) {
            const {parentNode} = currentTarget
            if (width > 780) {
                parentNode.parentNode.style.gridTemplateColumns = `1fr 3fr 1fr`
            } else {
                if (isOpen === false && grid === 200) {
                    let i = grid
                    const downGrid = setInterval(() => {
                        parentNode.parentNode.style.gridTemplateColumns = `${i}px 1fr ${i}px`
                        if (i === 45) {
                            clearInterval(downGrid)
                            setGrid(45)
                        } else {
                            i -= 5
                            setGrid(i)
                        }
                    }, 1000 / 155)
                    parentNode.classList.remove('arrow')
                    currentTarget.classList.remove('hamburger--arrow')
                }
                if (isOpen === true && grid === 45) {
                    let i = grid
                    const upGrid = setInterval(() => {
                        parentNode.parentNode.style.gridTemplateColumns = `${i}px 1fr ${i}px`
                        if (i === 200) {
                            clearInterval(upGrid)
                            setGrid(200)
                        } else {
                            i += 5
                            setGrid(i)
                        }
                    }, 1000 / 155)
                    parentNode.classList.add('arrow')
                    currentTarget.classList.add('hamburger--arrow')
                }
            }
        }
    }, [isOpen, currentTarget, grid, width])

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