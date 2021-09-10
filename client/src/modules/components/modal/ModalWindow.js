import "../../../sass/modal_template/ModalWindow.scss"
import Logo from "../logo/Logo";

const ModalWindow = ({closeModalWindow}) => {

    return (
        <div className="modal-window">
            <div className="modal-window-body">
                <Logo color={""}/>
                <button onClick={closeModalWindow}>Close</button>
                <h5><span>Welcome! </span>Please sign in / sign up to continue or</h5>
            </div>
        </div>
    )
}

export default ModalWindow