import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserAlt} from "@fortawesome/free-solid-svg-icons";
import ModalWindow from "./components/modal/ModalWindow";
import {useState} from "react";

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
        <div>
            <FontAwesomeIcon icon={faUserAlt} size="2x"/><h1>Hello Guys!</h1>
            <button onClick={openModalWindow}>Click me</button>
            {isModal ? <ModalWindow closeModalWindow={closeModalWindow}/> : ""}
        </div>
    );
}

export default App;
