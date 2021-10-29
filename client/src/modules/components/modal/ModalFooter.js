import {faPaw} from "@fortawesome/free-solid-svg-icons";

import "../../../sass/modal_template/ModalFooter.scss"
import Button from "../button/Button";
import {Link} from "react-router-dom";

const ModalFooter = ({currentForm}) => {

    return (
        <div className="modal-window-footer">
            <div className="text-box">
                <p>By clicking "Submit", you agree to us processing your information
                    in accordance width <span>these terms</span>.</p>
            </div>
            <div className="btns-box">
                <Link to="/">
                    <Button color="btnWhite" text="Cancel"/>
                </Link>
                {currentForm ?
                    <Button name="login" icon={faPaw} text="Login" color="btn"/> :
                    <Button name="reg" icon={faPaw} text={'Registration'} color={'btn'}/>
                }
            </div>
        </div>
    )
}

export default ModalFooter
