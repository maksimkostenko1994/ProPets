import {faPaw} from "@fortawesome/free-solid-svg-icons";

import "../../../sass/modal_template/ModalFooter.scss"
import Button from "../button/Button";
import {Link} from "react-router-dom";
import {loginAction, registrationAction} from "../../../store/auth";
import {useDispatch} from "react-redux";

const ModalFooter = ({currentForm, user}) => {

    const dispatch = useDispatch()

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
                <Link to={`/posts`}>
                    {currentForm ? <Button click={() => dispatch(loginAction(user))} icon={faPaw} text="Login" color="btn"/>: <Button click={() => dispatch(registrationAction(user))} icon={faPaw} text={'Registration'} color={'btn'}/>}
                </Link>
            </div>
        </div>
    )
}

export default ModalFooter
