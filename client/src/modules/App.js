import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserAlt} from "@fortawesome/free-solid-svg-icons";
import ModalWindow from "./components/modal/ModalWindow";
import {useState} from "react";
import MainPageSection from './components/mainPage/MainPageSection';
import Button from "./components/button/Button.js";

function App() {
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
        <>
        <div style={{display: "flex", height: "40px", justifyContent: "center", alignItems: 'center', margin: "4px", height: "100vh"}}>
            <FontAwesomeIcon icon={faUserAlt} size="2x"/><h1>Hello Guys!</h1>
            <button onClick={openModalWindow}>Click me</button>
            {isModal ? <ModalWindow closeModalWindow={closeModalWindow}/> : ""}
        </div>
        <MainPageSection/>
        <Button btnStyle='btnType2' btnIcon='paw' text='Publish' />
        <Button btnStyle='btnType2' btnIcon='paw' text='Submit' />
        <Button btnStyle='btnType3' btnIcon='search' text='I lost my pet' />
        <Button btnStyle='btnType4' btnIcon='paw' text='I found a pet' />
        <Button btnStyle='btnType4' btnIcon='plus' text='Add new' />
        <Button btnStyle='btnType4' btnIcon='save' text='Save changes' />
        <Button btnStyle='btnType5' btnIcon='' text='Cancel' />
        </>
    );
}

export default App;
