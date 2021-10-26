import React, {useState} from 'react'
import Button from '../button/Button'
import logoFull from './img/Group1.png'
import ModalWindow from "../modal/ModalWindow";

export default function MainPageNav() {

    const [isModal, setModalWindow] = useState(false)

    const closeModalWindow = () => {
        setModalWindow(false)
    }

    const openModalWindow = () => {
        setModalWindow(true)
    }

    return (
        <div className="navMainPage">
            {isModal && <ModalWindow closeModalWindow={closeModalWindow}/>}
            <div className="navContainer">
                <a href="#" className="logo">
                    <img src={logoFull} alt="logo-full"/>
                </a>
                <Button click={openModalWindow} color='btn' text='Sign in'/>
            </div>
        </div>
    )
}

