import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faPaw} from "@fortawesome/free-solid-svg-icons";

import "../../../sass/logo_template/Logo.scss"

const Logo = () => {
    
    return (
        <div className="logo">
            <h1>Pr<span/>P<span>ET</span>S</h1>
            <FontAwesomeIcon className="logo-search" icon={faSearch} size="3x"/>
            <FontAwesomeIcon className="logo-paw" icon={faPaw}/>
            <div className="logo-circle-inside"/>
            <div className="logo-circle-outside"/>
            <div className="logo-line"/>
        </div>
    )
}



export default Logo

