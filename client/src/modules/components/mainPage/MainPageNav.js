import React from 'react'
import Button from '../button/Button'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {authSelector} from "../../../store/app";

import {faPlus} from "@fortawesome/free-solid-svg-icons";
import Logo from "../logo/Logo";

export default function MainPageNav() {

    const auth = useSelector(authSelector)

    return (
        <div id="top" className="navMainPage" style={{
            background: auth && "snow"
        }}>
            <div className="navContainer">
                {auth ? <Link to="/posts"><Logo color={"textColor"}/></Link> :
                    <Link to="/" className="logo">
                        <Logo color={"whiteText"}/>
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

