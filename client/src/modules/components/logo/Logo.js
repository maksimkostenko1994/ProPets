import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faPaw} from "@fortawesome/free-solid-svg-icons";

import "../../../sass/logo_template/Logo.scss"

const Logo = ({color}) => {
    
    return (
        <div className={`logo ${color}`}>
            <h1>Pr<span/>P<span>ET</span>S</h1>
            <FontAwesomeIcon className="logo-search" icon={faSearch} size="3x"/>
            <FontAwesomeIcon className="logo-paw" icon={faPaw}/>
            <div className="logo-circle-inside" style={{
                borderColor: color==="whiteText" && "#06B2BB"
            }}/>
            <div className="logo-circle-outside" style={{
                borderTopColor: color==="whiteText" && "#06B2BB",
                borderLeftColor: color==="whiteText" && "#06B2BB",
                borderRightColor: color==="whiteText" && "#06B2BB"
            }}/>
            <div className="logo-line" style={{
                backgroundColor: color==="whiteText" && "#06B2BB"
            }}/>
        </div>
    )
}



export default Logo

