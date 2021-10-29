import React from 'react'
import Button from '../button/Button'
import logoFull from './img/Group1.png'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {authSelector} from "../../../store/app";

import {faPlus} from "@fortawesome/free-solid-svg-icons";

export default function MainPageNav() {

    const auth = useSelector(authSelector)

    return (
        <div className="navMainPage" style={{
            background: auth && "snow"
        }}>
            <div className="navContainer">
                {auth ? <Link to="/posts"><img src={logoFull} alt="logo-full"/></Link> :
                    <Link to="/" className="logo">
                        <img src={logoFull} alt="logo-full"/>
                    </Link>}
                {auth ?
                    <>
                        <Link to="/"><Button text={'Add new'} icon={faPlus} color={'btn'}/></Link>
                    </>
                    :
                    <Link to="/signin"><Button color='btn' text='Sign in'/></Link>
                }
            </div>
        </div>
    )
}

