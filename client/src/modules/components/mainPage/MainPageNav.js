import React from 'react'
import Button from '../button/Button'
import logoFull from './img/Group1.png'
import {Link} from "react-router-dom";

export default function MainPageNav() {

    return (
        <div className="navMainPage">
            <div className="navContainer">
                <Link to="/" className="logo">
                    <img src={logoFull} alt="logo-full"/>
                </Link>
                <Link to="/signin"><Button color='btn' text='Sign in'/></Link>
            </div>
        </div>
    )
}

