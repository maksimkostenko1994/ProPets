import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaw} from "@fortawesome/free-solid-svg-icons";

import "../../../sass/modal_template/ModalFooter.scss"

const ModalFooter = ({closeModalWindow}) => {
    return (
        <div className="modal-window-footer">
            <div className="text-box">
                <p>By clicking "Submit", you agree to us processing your information
                    in accordance width <span>these terms</span>.</p>
            </div>
            <div className="btns-box">
                <button onClick={() => closeModalWindow()}>Cancel</button>
                <button><FontAwesomeIcon className="btn-icon" icon={faPaw} size="1x"/>Submit</button>
            </div>
        </div>
    )
}

export default ModalFooter
