import React, {useState} from 'react'
import Button from '../button/Button'
import logoFull from './img/Group1.png'
import ModalWindow from "../modal/ModalWindow";

export default function MainPageNav() {

    const [isModal, setModalWindow] = useState(false)

    const closeModalWindow = () => {
        let isModalWindow = isModal
        isModalWindow = false
        setModalWindow(isModalWindow)
    }

    const openModalWindow = () => {
        let isModalWindow = isModal
        isModalWindow = true
        setModalWindow(isModalWindow)
    }

    return (
        <div className="navMainPage">
            <div className="navContainer">
                <a href="#" className="logo">
                    <img src={logoFull} alt="logo-full"/>
                </a>
                <Button onClick={openModalWindow} btnStyle='btnType1' btnIcon='' text='Sign in'/>
                {isModal ? <ModalWindow closeModalWindow={closeModalWindow}/> : ""}
            </div>
        </div>
    )
}

