import {faPaw} from "@fortawesome/free-solid-svg-icons";

import "../../../sass/modal_template/ModalFooter.scss"
import Button from "../button/Button";

const ModalFooter = ({closeModalWindow, renderPostComponent}) => {
    return (
        <div className="modal-window-footer">
            <div className="text-box">
                <p>By clicking "Submit", you agree to us processing your information
                    in accordance width <span>these terms</span>.</p>
            </div>
            <div className="btns-box">
                <Button click={closeModalWindow} color="btnWhite" text="Cancel"/>
                <Button icon={faPaw} text="Submit" color="btn" click={() => {
                    closeModalWindow()
                    renderPostComponent()
                }}/>
            </div>
        </div>
    )
}

export default ModalFooter
