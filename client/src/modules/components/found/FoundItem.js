import testPhoto from "./../../../assets/img/dog3.png";
import "../../../sass/found_tempalte/Found-item.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const FoundItem = () => {
    return (
        <div className="found-item">
            <p className="found-nick"> Nick</p>
            <div className="found-header">
                <span>
                    <FontAwesomeIcon icon={faMapMarker} />
                </span>
                <p>address</p>
            </div>
            <div className="found-body">
                <img src={testPhoto} alt="imgPhoto" />
            </div>
            <div className="found-footer">
                <NavLink
                    to={`/found/foundFullInfo/1`}
                    className="found-details-btn"
                >
                    view details
                </NavLink>
                <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <FontAwesomeIcon icon={faChevronRight} />
                </span>
            </div>
        </div>
    );
};
export default FoundItem;
